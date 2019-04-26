'use strict';

if (process.env.NODE_ENV !== `production`) {
  require(`dotenv`).config();
}

// var GLOBAL_CONFIG = require('../.env');

// var env = (process.env.NODE_ENV || 'development');
// var isDevEnv = env === 'development' || env === 'test';

module.exports = {

  "mysqlProser": {
    host: process.env.REPORTS_DB_HOST,
    user: process.env.REPORTS_DB_USER,
    "url": "",
    port: 3151, //process.env.DEFAULT_PORT,
    database: process.env.REPORTS_PROSER_DB,
    password: process.env.REPORTS_DB_PASSWORD,
    "name": "mysqlProser",
    "connector": "mysql"
  },



  // hostname: process.env.NODE_ENV,
  // restApiRoot: GLOBAL_CONFIG.restApiRoot,
  // livereload: process.env.LIVE_RELOAD,
  // isDevEnv: isDevEnv,
  // indexFile: require.resolve(isDevEnv ?
  //   '../client/ngapp/index.html' : '../client/dist/index.html'),
  // port: GLOBAL_CONFIG.port,
  // legacyExplorer: GLOBAL_CONFIG.legacyExplorer
};
