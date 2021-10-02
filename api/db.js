const Pool = require('pg').Pool;
const pool = new Pool({
  user: "hood_watch",
  password: "airman",
  database: "hood_watch_final",
  host: "localhost",
  port: 5432
});

module.exports = pool;