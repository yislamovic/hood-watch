const express = require('express');
const router = express.Router();

module.exports = (db) => {

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
    SELECT report_description, character_amount, gps_coordinates, up_vote, down_vote, comment
    FROM Report, Vote, Comment
    JOIN User ON Report.id = User.report_id
    WHERE Report.id = ${req.params.id}`)
      .then(data => {
        const questions = data.rows;
        return res.json({ questions });
      })
      .catch(err => {
        return res
          .status(500)
          .json({ error: err.message });
      });
  });
 
  return router;
};