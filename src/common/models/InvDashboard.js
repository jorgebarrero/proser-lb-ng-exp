'use strict';

const myPool = require ('../../connectors/pool');
// const dashboard = require ('../query/dashboard');


const poolDat = myPool.poolDat;

module.exports = function(InvDashboard) {

  InvDashboard.dashboard = async function(filtro) {
    return mainSQLDahsboard(filtro);
  };

  InvDashboard.remoteMethod('dashboard', {
    accepts: {arg: 'filtro', type: 'object', http: { source: 'body'} },
    returns: {type: 'array', root: 'true'}
  });

  async function mainSQLDahsboard(filtro){

    let resultDashboard = [];

    //***************************CDR INFORMATION****************************/


    let SQLCdr =
        `
        SELECT
        ${dashboard.SQLCdr}

        FROM
        MainCdr

        `;

    try {
      var result = await poolDat.query(SQLCdr);
      console.log("SQL CDR", result);
      var cdr = result;
    }
    catch (error) {
      console.log('Server error');
      console.log(queryMenuSchedule);
      return error;
    }

    //***************************AUDIT INFORMATION****************************/

    let SQLAudit =
        `
        `;

    try {
      var result = await poolDat.query(SQLAudit);
      console.log("SQL AUDIT", result);
      var audit = result;
    }
    catch (error) {
      console.log('Server error');
      console.log(queryMenuSchedule);
      return error;
    }

    //***************************CALL-CENTER INFORMATION****************************/

    let SQLCC =
        `
        `;

    try {
      var result = await poolDat.query(SQLCC);
      console.log("SQL AUDIT", result);
      var callcenter = result;
    }
    catch (error) {
      console.log('Server error');
      console.log(queryMenuSchedule);
      return error;
    }

    //******************************RESULT*******************/

    resultDashboard[0] = cdr;
    resultDashboard[1] = audit;
    resultDashboard[2] = callcenter;
  }


};
