const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

module.exports = (db) => {

  router.post('/register', (req, res) => {
    const { firstName, email, password } = req.body;

    let selectString = `
      SELECT * FROM person
      email = $2
    `;

    let insertString = `
      INSERT INTO person (first_name, last_name, email, person_password, person_adress)
      VALUES ($1, $2, $3, $4, $5)
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
      SELECT email, person_password FROM person
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
        } else if (!email || !password) {
          res.status(400);
          res.send("Email or/and Password cannot be blank");
          return;
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
    SELECT title, category, date_time, up_vote, down_vote, report
    FROM report
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
    SELECT title, category, date_time, up_vote, down_vote, report, report_address, person_id
    FROM report, Vote, Comment
    JOIN person ON report.id = person.report_id
    WHERE report.id = ${req.params.id}`)
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
    SELECT report_address
    FROM report`)
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