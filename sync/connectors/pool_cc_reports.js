
// console.log('No value for FOO yet:', process.env.FOO);

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

/***************************** */
const util = require(`util`);
const mysql = require(`mysql`);

const poolCCreports = mysql.createPool({
  connectionLimit: 10,
  host: process.env.REPORTS_DB_HOST,
  user: process.env.REPORTS_DB_USER,
  password: process.env.REPORTS_DB_PASSWORD,
  database: `cc_reports`,
  multipleStatements: true
});

// Ping database to check for common exception errors.
poolCCreports.getConnection((err, connection) => {
  if (err) {
    if (err.code === `PROTOCOL_CONNECTION_LOST`) {
      console.error(`Database connection was closed.`);
    }
    if (err.code === `ER_CON_COUNT_ERROR`) {
      console.error(`Database has too many connections.`);
    }
    if (err.code === `ECONNREFUSED`) {
      console.error(`Database connection was refused.`);
    }
  }

  if (connection) connection.release();

  return;
});




// Promisify for Node.js async/await.
poolCCreports.query = util.promisify(poolCCreports.query);

module.exports = {
  poolCCreports,
};
