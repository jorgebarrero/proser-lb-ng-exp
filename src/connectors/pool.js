
// console.log('No value for FOO yet:', process.env.FOO);

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

/***************************** */
const util = require(`util`);
const mysql = require(`mysql`);

const poolCdr = mysql.createPool({
  connectionLimit: 10,
  host: process.env.REPORTS_DB_HOST,
  user: process.env.REPORTS_DB_USER,
  password: process.env.REPORTS_DB_PASSWORD,
  database: process.env.REPORTS_ASTERISKCDR_DB,
  multipleStatements: true
});

const poolDat = mysql.createPool({
  connectionLimit: 10,
  host: process.env.REPORTS_DB_HOST,
  user: process.env.REPORTS_DB_USER,
  password: process.env.REPORTS_DB_PASSWORD,
  database: process.env.REPORTS_PROSER_DB,
  multipleStatements: true
});


const poolQue = mysql.createPool({
  connectionLimit: 10,
  host: process.env.REPORTS_DB_HOST,
  user: process.env.REPORTS_DB_USER,
  password: process.env.REPORTS_DB_PASSWORD,
  database: process.env.REPORTS_ASTERISK_DB,
  multipleStatements: true
});

const poolCall = mysql.createPool({
  connectionLimit: 10,
  host: process.env.REPORTS_DB_HOST,
  user: process.env.REPORTS_DB_USER,
  password: process.env.REPORTS_DB_PASSWORD,
  database: process.env.REPORTS_CALLCENTER_DB,
  multipleStatements: true
});


// Ping database to check for common exception errors.
poolCdr.getConnection((err, connection) => {
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

// Ping database to check for common exception errors.
poolDat.getConnection((err, connection) => {
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


// Ping database to check for common exception errors.
poolQue.getConnection((err, connection) => {
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

// Ping database to check for common exception errors.
poolCall.getConnection((err, connection) => {
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
poolCdr.query = util.promisify(poolCdr.query);
poolDat.query = util.promisify(poolDat.query);
poolQue.query = util.promisify(poolQue.query);
poolCall.query = util.promisify(poolCall.query);

module.exports = {
  poolCdr,
  poolDat,
  poolQue,
  poolCall,
};
