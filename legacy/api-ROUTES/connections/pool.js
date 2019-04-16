/* **************************** */
const util = require('util');
const mysql = require('mysql');

const poolCdr = mysql.createPool({
  connectionLimit: 10,
  host: '10.30.4.55',
  user: 'maprotel',
  password: 'M4pr0t3l.2018',
  database: 'asteriskcdrdb',
});

const poolDat = mysql.createPool({
  connectionLimit: 10,
  host: '10.30.4.55',
  user: 'maprotel',
  password: 'M4pr0t3l.2018',
  database: 'cc_reports',
});

const poolQue = mysql.createPool({
  connectionLimit: 10,
  host: '10.30.4.55',
  user: 'maprotel',
  password: 'M4pr0t3l.2018',
  database: 'asterisk',
});

const poolCall = mysql.createPool({
  connectionLimit: 10,
  host: '10.30.4.55',
  user: 'maprotel',
  password: 'M4pr0t3l.2018',
  database: 'call_center',
});


// Ping database to check for common exception errors.
poolCdr.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }

  if (connection) connection.release();
});

// Ping database to check for common exception errors.
poolDat.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }

  if (connection) connection.release();
});

// Ping database to check for common exception errors.
poolQue.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }

  if (connection) connection.release();
});

// Ping database to check for common exception errors.
poolCall.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }

  if (connection) connection.release();
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
