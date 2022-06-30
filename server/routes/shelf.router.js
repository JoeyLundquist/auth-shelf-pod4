const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware')

/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT * FROM item`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`Error in the shelf router`, err)
      res.sendStatus(500);
    }) 
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('shelf POST route')
  console.log(req.user)

  const sqlQuery = `
  INSERT INTO item (description, image_url, user_id)
  VALUES ($1, $2, $3)
  `
  const sqlParams = [
    req.body.description,
    req.body.image_url,
    req.user.id
  ]
  pool.query(sqlQuery, sqlParams)
  .then(dbRes => {
    res.sendStatus(201)
  })
  .catch(error => {
    console.error('error in POST shelf', error)
    res.sendStatus(500)
  });
});

/**
 * Delete an item if it's something the logged in user added
 */               //Added in a Unauthenticated 
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    DELETE FROM item
    WHERE id = $1 AND user_id = $2
    RETURNING *;
  `
  // req.params is the information coming form '/:id' 
  // req.params is for a url while req.body is for sending information 
  // with sessionMiddleware, we have access to req.user - the passport
  const sqlParams = [
    req.params.id,
    req.user.id
  ]
  pool.query(sqlQuery, sqlParams).then ((dbRes) => {
    if (dbRes.rows.length === 0 ){
      res.sendStatus(404)
  }
  })
  .catch((err) => {
    console.log('Err in DELETE', err)
    res.sendStatus(500)
  })
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
});

module.exports = router;
