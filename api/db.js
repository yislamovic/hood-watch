const Pool = require('pg').Pool;
const pool = new Pool({
  user: "hood_wacth",
  password: "airman",
  database: "hood_watch_final",
  host: "localhost",
  port: 5432
})

module.exports = pool;