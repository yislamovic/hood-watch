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
      `SELECT * FROM person;`
    )
    res.json(allUsers.rows);
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
       WHERE id = $1;`, [id]
    )
    res.json(user.rows[0]);
    console.log(req.body)
  } catch (err) {
    console.log(err.message)
  }
});

app.post("/register", async(req, res) => {
  console.log("post register", req.body);
  try {
    const { first_name, last_name, email, password, address } = req.body.values;
    const newUser = pool.query(
      `INSERT INTO person (first_name, last_name, email, person_password, person_address) values ($1, $2, $3, $4, $5)
       RETURNING *;`
      , [first_name, last_name, email, password, address]);
    res.json(newUser);
    console.log(req.body.values);
  } catch (err) {
    console.log(err.message);
  }
});

app.post("/login", async(req, res) => {
  console.log('51 req.body.values ---->',req.body.values);
  try {
    const { email, password } = req.body.values;
    const loginUser = await pool.query(
      `SELECT * FROM person 
       WHERE email = $1 AND person_password = $2;`
      ,[email,password]);
    console.log('RES.ROWS 58 --->', loginUser.rows);
    console.log('RES.ROWS[0] 59 --->', loginUser.rows[0]);
    return res.json(loginUser.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/reports", async(req, res) => {
<<<<<<< HEAD
  try{
    
=======
  try {
>>>>>>> 5987c4d1ccc3064e96d43fc40bc74e1af6d259b0
    const allPosts = await pool.query(
      `SELECT *
      FROM report
      JOIN person ON report.person_id = person.id
      GROUP BY report.id, person.id
      `
      )
      res.json(allPosts.rows);
      console.log(req.body)
  } catch (err) {
    console.log(err.message)
  }
})

app.get("/comment/:id", async(req, res) => {
  try{
    
    const { id } = req.params;
    const comments = await pool.query(
      `SELECT *
      FROM comment
      JOIN person ON person.id = comment.person_id
      WHERE comment.report_id = $1
      GROUP BY comment.id, person.id;
      `, [id]
      )
      res.json(comments.rows);
  } catch(err) {
    console.log(err.message)
  }
})

app.get("/reports/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const singlePost = await pool.query(
      `SELECT id, title, category, date_time, report, report_address, up_vote, down_vote, person_id
      FROM report
      JOIN person ON person_id = person.id
      WHERE id = $1`, [id]
    );
    res.json(singlePost.rows[0]);
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
})

app.get("/map", async(req, res) => {
  try {
    const userPostsMap = await pool.query(
      `SELECT *
       FROM report
       JOIN person ON person.id = person_id`
    );
    res.json(userPostsMap.rows);
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

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
    console.log(err.message)
  }
})

<<<<<<< HEAD
app.post("/login", async(req, res) => {
  console.log('109 req.body', req.body);
  try {
    const { email, password } = req.body.values;
    const login = await pool.query(
      `SELECT * FROM person
       WHERE email = $1 AND person_password = $2;`
      , [email, password]);
    console.log(login.rows)
    res.json(login);
    console.log(req.body.values);
  } catch (err) {
    console.log(err.message);
  }
});

=======
>>>>>>> 5987c4d1ccc3064e96d43fc40bc74e1af6d259b0
app.post("/new", async(req, res) => {
  try {
    const { title, category, report, report_address } = req.body.values;
    const newReportData = await pool.query(
      `INSERT INTO report (title, category, report, report_address) values ($1, $2, $3, $4)
       RETURNING *;`,
      [title, category, report, report_address]);
    console.log('NEW REPORT BACKEND --->', newReportData.rows[0]);
    res.json(newReportData.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/update/:id", async(req, res) => {
  try {
    const { person_id } =  req.params;
    const { report_id } =  req.body.values;
    const get_report = await pool.query(
      `SELECT title, category, report, report_address 
      FROM report
      JOIN person ON person_id = person.id
      WHERE person.id = $1 AND report.id = $2;`, [person_id,report_id]);
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
      WHERE report_id = ${id};`,
      [title, category, report, report_address]);
    res.json(update_report);
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});

app.put("/upvote/:id/:vote", async(req, res) => {
  try {
    const { id, vote } = req.params;
    console.log(req.params)
    const updateCounter = await pool.query(
      `UPDATE report
      SET up_vote = $2
      WHERE id = $1;`,
      [id, vote]);
    res.json(updateCounter.rows);
    console.log(req.body);
  } catch (err) {
    console.log(err.message);
  }
});
//END of example ROUTES

app.listen(8000, () => {
  console.log("server is listening on port 8000");
});