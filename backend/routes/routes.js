const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  router.post('/register', (req, res) => {
    const { firstName, email, password } = req.body;

    let selectString = `
      SELECT * FROM User
      email = $2
    `;

    let insertString = `
      INSERT INTO User (first_name, last_name, email, user_password, country, province_or_state, city, street)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;
    let selectParams = [firstName, email];
    let insertParams = [firstName, email, bcrypt.hashSync(password, 10)];

    db.query(selectString, selectParams);
    if (firstName && email && password) {
      db.query(insertString, insertParams)
        .then((data) => {
          req.session = {
            userID: data.rows[0].id,
            userEmail: data.rows[0].email,
            userName: data.rows[0].user_password,
          };
          res.render('/login', { user: req.session.userID });
        })
        .catch((err) => {
          res
            .status(500)
            .json({ error: err.message });
        });
    } else {
      res.send("Please enter valid email and/or password");
      res.redirect('/register');
    }
  });

  router.get('/login', (req, res) => {
    const { email, password } = req.body;

    let queryString = `
      SELECT * FROM User
    `;

    let queryParams = [email];

    db.query(queryString, queryParams)
      .then((data) => {
        if (bcrypt.compareSync(password, data.rows[0].password)) {
          req.session = {
            userID: data.rows[0].id,
            userEmail: data.rows[0].email,
            userName: data.rows[0].user_password
          };
          res.redirect('/home');
        } else {
          res.status(403);
          res.send("Incorrect Email And/Or Password");
        }
      })
      .catch((err) => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/logout', (req, res) => {
    req.session = null;
    res.redirect('/login');
  });

  router.get("/reports", (req, res) => {
    db.query(`
    SELECT report_description, character_amount, gps_coordinates, up_vote
    FROM Report, Vote 
    ORDER BY up_vote;`)
      .then(data => {
        const reports = data.rows;
        return res.json({ reports });
      })
      .catch(err => {
        return res
          .status(500)
          .json({ error: err.message });
      });

  });
  
  router.get("/reports/:id", (req, res) => {
    db.query(`
    SELECT title, date_time, report_description, character_amount, up_vote, down_vote, comment
    FROM Report, Vote, Comment
    JOIN User ON Report.id = User.report_id
    WHERE Report.id = ${req.params.id}`)
      .then(data => {
        const report = data.rows;
        return res.json({ report });
      })
      .catch(err => {
        return res
          .status(500)
          .json({ error: err.message });
      });
  });


  
  router.get("/map", (req, res) => {
    db.query(`
    SELECT gps_coordinates
    FROM Report`)
      .then(data => {
        const map = data.rows;
        return res.json({ map });
      })
      .catch(err => {
        return res
          .status(500)
          .json({ error: err.message });
      });
  });
 
  return router;
};