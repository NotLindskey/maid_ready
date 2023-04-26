const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route
 */

// get all properties
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT * FROM "property" WHERE "owner_id" = $1;`;
    pool.query(query, [req.user.id])
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

// get specific property
router.get('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    const query = `SELECT * FROM "property" WHERE "id" = $1 AND "owner_id" = $2;`;
    pool.query(query, [req.params.id, req.user.id])
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

/**
 * POST route
 */

// add property
router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
      const query = `INSERT INTO "property" ("street", "city", "state", "zipcode", "sq_footage", "owner_id")
                    VALUES ($1, $2, $3, $4, $5, $6)`;
      pool.query(query, [req.body.street, req.body.city, req.body.state, req.body.zipcode, req.body.sq_footage, req.user.id])
        .then(() => {
          res.sendStatus(201);
        })
        .catch(err => {
          console.log('ERROR: Posting property', err);
          res.sendStatus(500)
        })
    } else {
      res.sendStatus(403);
    }
  });

module.exports = router;