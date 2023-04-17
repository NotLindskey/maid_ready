const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const email = req.body.email;
  const account_type = req.body.account_type;

  const queryText = `INSERT INTO "user" (username, password, email, account_type)
    VALUES ($1, $2, $3, $4) RETURNING id`;
  pool
    .query(queryText, [username, password, email, account_type])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

//delete a user from the admin page
//we are using a POST command so we could send multiple pieces of data from the front end
router.post('/deleteUser', (req,res) => {
  let queryText = `DELETE FROM "user" WHERE "username" = '${req.body.userName}' AND "account_type" = '${req.body.accountType}';`;

  pool.query(queryText)
  .then(() => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('error in user.router.js /deleteUser', error);
  });
});

//get admins to populate table on AdminPage
router.get('/getAdmins', (req,res) => {
  let queryText = `SELECT * FROM "user" WHERE "account_type" = 'admin';`

  pool.query(queryText)
  .then((response) => {
    res.send(response.rows);
  }).catch((error) => {
    console.log('error in /getAdmins', error);
    res.sendStatus(500);
  });
});

//gets suggestions as you type on the AdminPage
router.post('/getSuggestions/:id', (req, res) => {
  console.log('req.params:', req.params.id);
  let queryText = `SELECT "id", "username", "email", "account_type"  FROM "user" where "username" LIKE '${req.params.id}%' LIMIT 3;`;

  pool.query(queryText)
  .then((response) => {
    res.send(response.rows);
  }).catch((error) => {
    console.log('error in /getSuggestions', error);
    res.sendStatus(500);
  })
})

module.exports = router;
