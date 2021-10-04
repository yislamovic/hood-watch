const express = require('express');
const app = express();
const pool = require("./db");
const cors = require("cors");
app.use(cors());
app.use(express.json());

//Example routes
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query(
      `SELECT * FROM person`
    )
    res.json(allUsers.rows[0]);
    console.log(req.body)
  } catch (err) {
    console.log(err.message)
  }
})

app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params
    const user = await pool.query(
      `SELECT * FROM person
       WHERE id = $1`, [id]
    )
    res.json(user.rows[0]);
    console.log(req.body)
  } catch (err) {
    console.log(err.message)
  }
})

app.post("/register", async (req, res) => {
  console.log("post register", req.body);
  try {
    const { first_name, last_name, email, password, address } = req.body.values;
    const newUser = pool.query(
      `INSERT INTO person (first_name, last_name, email, person_password, person_address) values ($1, $2, $3, $4, $5)
       RETURNING *`
      , [first_name, last_name, email, password, address]);
    res.json(newUser);
    console.log(req.body.values);
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/login", async(req, res) => {
  console.log('51 req.body.values ---->',req.body.values);
  const { email, password } = req.body.values;
  const login = await pool.query(
    `SELECT * FROM person 
    WHERE email = $1 AND person_password = $2;`
    , [email,password]);
  console.log('57 login --->', login);
  return res.json(login.rows[0]);
});

app.get("/reports", async(req, res) => {
  try{
    const allPosts = await pool.query(
      `SELECT id, title, category, date_time,report, report_address, up_vote, down_vote, person_id
      FROM report`
      )
      res.json(allPosts.rows[0]);
      console.log(req.body)
  } catch(err) {
    console.log(err.message)
  }
})

app.get("/reports/:id", async(req, res) => {
  try{
    const { id } = req.params
    const singlePost = await pool.query(
      `SELECT id, title, category, date_time, report, report_address, up_vote, down_vote, person_id
      FROM report
      JOIN person ON person_id = person.id
      WHERE id = $1`, [id]
      )
      res.json(singlePost.rows[0]);
      console.log(req.body)
  } catch(err) {
    console.log(err.message)
  }
})

app.get("/map", async(req, res) => {
  try{
    const userPostsMap = await pool.query(
      `SELECT *
       FROM report
       JOIN person ON person.id = person_id`
      )
      res.json(userPostsMap.rows[0]);
      console.log(req.body)
  } catch(err) {
    console.log(err.message)
  }
})

app.delete("/delete/:id", async(req, res) => {
  try{
    const { id } = req.params;
    const { report_id } = req.body;
    const delete_record = await pool.query(
      `DELETE FROM report
       WHERE person_id = $1 AND id = $2;`, [id, report_id]
      )
      res.json(delete_record.rows[0]);
      console.log(req.body);
  } catch(err) {
    console.log(err.message);
  }
});

app.post("/new", async(req, res) => {
  try {
    const { title, category, report, report_address, person_id } = req.body;
    const new_report = await pool.query(
      `INSERT INTO report (title, category, report, report_address, person_id) values ($1, $2, $3, $4, $5)
       RETURNING *`,
      [title, category, report, report_address, person_id]);
    res.json(new_report);
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/update/:id", async(req, res) => {
  try {
    const { person_id } =  req.params;
    const { report_id } =  req.body;
    const get_report = await pool.query(
      `SELECT title, category, report, report_address 
      FROM report
      JOIN person ON person_id = person.id
      WHERE person.id = $1 AND report.id = $2`, [person_id,report_id]);
    res.json(get_report);
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/update/:id", async(req, res) => {
  try {
    const id = req.params;
    const { title, category, report, report_address } = req.body;
    const update_report = await pool.query(
      `UPDATE report
      SET title = $1
      category = $2
      report = $3
      report_address = $4
      WHERE report_id = ${id}`,
      [title, category, report, report_address]);
    res.json(update_report);
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});
//END of example ROUTES

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});