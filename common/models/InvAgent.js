// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

module.exports = function(InvAgent) {

  /**
 * gets a list of agents based on an array of params
 * @param {object} arg array of parameters
 * @param {Function(Error, array)} callback
 */

  InvAgent.InvAgent_list = function(arg, callback) {
    var list;
    // TODO
    callback(null, list);
  };

};
