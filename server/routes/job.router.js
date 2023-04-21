const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route
 */

// GET owners job requests
router.get("/owner/request", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT 
    "user"."username", 
    "property"."street", 
    "property"."city", 
    "property"."state", 
    "property"."zipcode",
    "job"."id",
    "job"."date_completed_by",
    "job"."price",
    "job"."status",
    "job"."claimed"
    FROM "user"
    JOIN "property" 
    ON "user"."id" = "property"."owner_id"
    JOIN "job"
    ON "property"."id" = "job"."property_id"
    WHERE "job"."owner_id" = $1;
    `;
    pool.query(query, [req.user.id])
      .then((result) => {
        // Send query result as response
        res.send(result.rows);
      })
      .catch((error) => {
        //Handle error
        console.log(`Error getting jobs for owner: `, error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// GET owner request for specific id
router.get("/owner/request/:id", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT 
    "user"."username", 
    "property"."street", 
    "property"."city", 
    "property"."state", 
    "property"."zipcode",
    "job"."id",
    "job"."date_completed_by",
    "job"."price",
    "job"."status",
    "job"."claimed"
    FROM "user"
    JOIN "property" 
    ON "user"."id" = "property"."owner_id"
    JOIN "job"
    ON "property"."id" = "job"."property_id"
    WHERE "job"."id" = $1 AND "job"."owner_id" = $2;
    `;
    pool.query(query, [req.params.id, req.user.id])
      .then((result) => {
        // Send query result as response
        res.send(result.rows);
      })
      .catch((error) => {
        //Handle error
        console.log(`Error getting request details for owner: `, error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// get all jobs
router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT 
        "user"."username", 
        "property"."street",
        "property"."city",
        "property"."state",
        "property"."zipcode",
        "job".*
        
        FROM "job"
        JOIN "user" 
        ON "job"."owner_id" = "user"."id"
        JOIN "property" 
        ON "property"."id" = "job"."property_id"
        WHERE "job"."status" = 'incomplete' AND claimed = false AND keeper_id IS NULL;`;

    pool
      .query(query)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error getting jobs: `, error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// GET job by ID
router.get("/", (req, res) => {
  // GET route code here
});

// GET job details by ID
router.get("/detail/:id", (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    const query = `SELECT 
        "user"."username", 
        "property"."street",
        "property"."city",
        "property"."state",
        "property"."zipcode",
        "job".*
        FROM "job"
        JOIN "user" 
        ON "job"."owner_id" = "user"."id"
        JOIN "property" 
        ON "property"."id" = "job"."property_id"
        WHERE ("job"."id" = $1  AND ("job"."keeper_id" = $2 OR "job"."keeper_id" IS NULL));`;

    const checklistQuery = `SELECT * FROM "checklist_item" WHERE "checklist_item"."job_id" = $1 ORDER BY "checklist_item"."id" ASC;`
    pool
      .query(query, [req.params.id, req.user.id])
      .then((result) => {
        const jobDetails = result.rows
        pool.query(checklistQuery, [req.params.id])
          .then((results) => {
            jobDetails[0].job_checklist = results.rows
            res.send(jobDetails);
          })
          .catch((error) => {
            console.log('Error getting job checklist: ', error);
          })
      })
      .catch((error) => {
        console.log(`Error getting job detail: `, error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// GET keepers's jobs
router.get("/user", (req, res) => {
  // GET route code here
  if (req.isAuthenticated()) {
    const query = `
    SELECT 
    "user"."username", 

    "property"."street",
    "property"."city",
    "property"."state",
    "property"."zipcode",
        
    "job".*
        
    FROM "job"
    JOIN "user" 
    ON "job"."owner_id" = "user"."id"
    JOIN "property" 
    ON "property"."id" = "job"."property_id"
    WHERE "job"."keeper_id" = $1;
    `;

    pool
      .query(query, [req.user.id])
      .then((results) => {
        res.send(results.rows);
      })
      .catch((err) => {
        console.log("Error with geting user's jobs: ", err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

// GET Keeper's Active Jobs
router.get("/keeper/active", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `
    SELECT 
    "user"."username", 

    "property"."street",
    "property"."city",
    "property"."state",
    "property"."zipcode",
        
    "job".*
        
    FROM "job"
    JOIN "user" 
    ON "job"."owner_id" = "user"."id"
    JOIN "property" 
    ON "property"."id" = "job"."property_id"
    WHERE "job"."keeper_id" = $1 and "job"."status" = 'incomplete' and "job"."claimed" = TRUE;
    `;

    pool.query(query, [req.user.id])
      .then((results) => {
        // console.log(results.rows)
        const currentDate = new Date()
        const currentDateString = currentDate.toISOString().slice(0, 10); // Get the date string without the time

        const activeJobArr = results.rows.reduce((arr, job) => {
          const dateConverter = new Date(job.date_completed_by);
          const dateConverterString = dateConverter.toISOString().slice(0, 10);

          if (dateConverterString == currentDateString) {
            return ([...arr, job])
          } else {
            return (arr)
          }
        }, [])

        res.send(activeJobArr)
      })
      .catch((err) => {
        console.log("Error with getting user's active jobs: ", err);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
})

// Get cleaning standards
router.get('/cleaning-standard', (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT * FROM "cleaning_standard";`

    pool.query(query)
      .then((results) => {
        res.send(results.rows)
      })
      .catch((err) => {
        console.log("Error with getting cleaning standards: ", err);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
})
/**
 * POST route
 */
router.post("/", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `INSERT INTO "job" ("price","date_completed_by", "time", "status", "claimed", "property_id", "owner_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING "job"."id"`;
    const standardQuery = `INSERT INTO "checklist_item" ("task","standard","job_id")
                            VALUES ($1, TRUE, $2);`;
    const customQuery = `INSERT INTO "checklist_item" ("task","standard","job_id")
                            VALUES ($1, FALSE, $2);`;
    pool
      .query(query, [
        req.body.price,
        req.body.date_completed_by,
        req.body.time,
        req.body.status,
        req.body.claimed,
        req.body.property_id,
        req.user.id,
      ])
      .then((results) => {
        const jobId = results.rows[0].id
        const standardChecklist = req.body.standard_checklist;
        const customChecklist = req.body.custom_checklist;

        if (standardChecklist.length) {
          req.body.standard_checklist.map((standard) => {
            pool.query(standardQuery, [standard, jobId])
              .then((results) => { })
              .catch((err) => {
                console.log("Error with posting standard checklist: ", err);
                res.sendStatus(500);
              });
          })
        }

        if (customChecklist.length) {
          req.body.custom_checklist.map((standard) => {
            pool.query(customQuery, [standard, jobId])
              .then((results) => { })
              .catch((err) => {
                console.log("Error with posting custom checklist: ", err);
                res.sendStatus(500);
              });
          })
        }

        res.sendStatus(201);
      })
      .catch((err) => {
        console.log("ERROR: Posting job", err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

/**
 * UPDATE route
 */
router.put("/apply", (req, res) => {
  if (req.isAuthenticated()) {
    // you will need the job id and the keeper id
    const query = `
    WITH cte AS (
      SELECT "id"
      FROM "job"
      WHERE "claimed" = FALSE AND "keeper_id" IS NULL
      LIMIT 1
    )
    UPDATE "job" c
    SET "claimed" = TRUE, "keeper_id" = $2
    FROM cte 
    WHERE c."id" = $1;
    `;

    pool
      .query(query, [req.body.jobId, req.user.id])
      .then((results) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.log("Error with applying to job: ", err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403);
  }
});

router.put("/complete", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `
    WITH cte AS (
      SELECT "id"
      FROM "job"
      WHERE "claimed" = TRUE AND "keeper_id" = $2 AND "status" = 'incomplete'
      LIMIT 1
    )
    UPDATE "job" c
    SET "status" = 'complete' 
    WHERE c."id" = $1;
    `;

    pool.query(query, [req.body.id, req.user.id])
      .then((results) => {
        res.sendStatus(201)
      })
      .catch((err) => {
        console.log("Error with completing job: ", err);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});

router.put('/check/task', (req, res) => {
  if (req.isAuthenticated()) {
    const query = `
    WITH cte AS (
      SELECT "id"
      FROM "checklist_item"
      WHERE "id" = $1 AND "job_id" = $2 AND "isComplete" = $3
      LIMIT 1
    )
    UPDATE "checklist_item" c
    SET "isComplete" = $4 
    WHERE c."id" = $1;
    `;

    pool.query(query, [req.body.task_id, req.body.job_id, req.body.task_state, !req.body.task_state])
      .then((results) => {
        res.sendStatus(201)
      })
      .catch((err) => {
        console.log("Error with completing job: ", err);
        res.sendStatus(500);
      })

  } else {
    res.sendStatus(403)
  }
})
/**
 * DELETE route
 */

// DELETE owner job request
router.delete('/owner/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const query = `
    DELETE FROM "job"
    WHERE "id" = $1
    AND "owner_id" = $2;
    `;
    pool
      .query(query, [req.params.id, req.user.id])
      .then((result) => {
        console.log('delete result', result);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log("Error with deleting job request: ", error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});


module.exports = router;
