// /* eslint-disable camelcase */
// const express = require('express');
// const app = express();
// const pool = require("./db");
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());

// app.get("/login", async(req, res) => {
//   try {
//     const { email, password } = req.body;
//     const login = await pool.query(
//       `INSERT INTO person (email, person_password) values ($1, $2)
//        RETURNING *`
//       , [email,password]);
//     res.json(login);
//     console.log(req.body);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.post("/new", async(req, res) => {
//   try {
//     const { title, category, report, report_address, person_id } = req.body;
//     const new_report = await pool.query(
//       `INSERT INTO report (title, category, report, report_address, person_id) values ($1, $2, $3, $4, $5)
//        RETURNING *`,
//       [title, category, report, report_address, person_id]);
//     res.json(new_report);
//     console.log(req.body);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.get("/update/:id", async(req, res) => {
//   try {
//     const { person_id } =  req.params;
//     const { report_id } =  req.body;
//     const get_report = await pool.query(
//       `SELECT title, category, report, report_address
//       FROM report
//       JOIN person ON person_id = person.id
//       WHERE person.id = $1 AND report.id = $2`, [person_id,report_id]);
//     res.json(get_report);
//     console.log(req.body);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

// app.put("/update/:id", async(req, res) => {
//   try {
//     const id = req.params;
//     const { title, category, report, report_address } = req.body;
//     const update_report = await pool.query(
//       `UPDATE report
//       SET title = $1
//       category = $2
//       report = $3
//       report_address = $4
//       WHERE report_id = ${id}`,
//       [title, category, report, report_address]);
//     res.json(update_report);
//     console.log(req.body);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

