const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route
 */

// get all jobs
router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT 
        "user"."username", 
        "property"."street",
        "property"."city",
        "property"."state",
        "property"."zipcode",
        "job"."id", 
        "job"."price",
        "job"."date_completed_by" 
        FROM "job"
        JOIN "user" 
        ON "job"."owner_id" = "user"."id"
        JOIN "property" 
        ON "property"."id" = "job"."property_id"
        WHERE "job"."status" = 'incomplete';`;
        
    pool
      .query(query)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error getting properties`, error);
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

/**
 * POST route 
 */
router.post("/", (req, res) => {
  if (req.isAuthenticated()) {
    const query = `INSERT INTO "job" ("price","date_completed_by", "time", "status", "claimed", "owner_id")
                    VALUES ($1, $2, $3, $4, $5, $6)`;
      pool.query(query, [req.body.price, req.body.date_completed_by, req.body.time, req.body.status, req.body.claimed, req.user.id])
        .then(() => {
          res.sendStatus(201);
        })
        .catch(err => {
          console.log('ERROR: Posting job', err);
          res.sendStatus(500)
        })
    } else {
      res.sendStatus(403);
    }
});

module.exports = router;
