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
    pool
      .query(query, [req.params.id, req.user.id])
      .then((result) => {
        res.send(result.rows);
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

/**
 * POST route
 */
router.post("/", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `INSERT INTO "job" ("price","date_completed_by", "time", "status", "claimed", "property_id", "owner_id")
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
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
      .then(() => {
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

/**
 * DELETE route
 */

// DELETE owner job request
router.delete('/owner/delete/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const query= `
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
