const express = require('express')
const app = express();
const pool = require("./db")
const cors = require("cors")
app.use(cors())
app.use(express.json())

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
  try {
    const { first_name, last_name, email, person_password, person_address } = req.body;
    const newUser = await pool.query(
      `INSERT INTO person (first_name, last_name, email, person_password, person_address) values ($1, $2, $3, $4, $5)
       RETURNING *`
      , [first_name, last_name, email, person_password, person_address])
    res.json(newUser);
    console.log(req.body)
  } catch (err) {
    console.log(err.message)
  }
})

app.get("/posts", async(req, res) => {
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

app.get("/posts/:id", async(req, res) => {
  try{
    const { id } = req.params
    const singlePost = await pool.query(
      `SELECT id, title, category, date_time,report, report_address, up_vote, down_vote, person_id
      FROM report
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
//END of example ROUTES

app.listen(8000, () => {
  console.log("server is listening on port 8000")
})