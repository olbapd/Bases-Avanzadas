/**
 * Exceltec Business Solution
 * DriverKey
 * v1.0 -- 2019
 * 
 * Developed by: Pablo Garcia
 * File: reporting.js
 * Description: Handles all the business logic for this protocol
 */

'use strict';
let reporting = require('../repository/reporting');

/**
 * Module Interface
 * @type {Object}
 */
let expose = {
  getReport:undefined
};

expose.getReport = (data,cb) => {
   let to_return = {
    success : null,
    error : null,
    data: null
  }
  reporting.getReport(data, (result) => {
    if (result.error) {
      global.log4us.error(`Error assigning active: ${result.error}`);
      to_return.error = true;
      to_return.success = false;
      cb(to_return);
      return;
    }
    to_return.success = true;
    to_return.data = result.data;
    cb(to_return);

  });

}

// expose this file as a module based on the expose object
module.exports = expose;
