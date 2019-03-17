/**
 * Exceltec Business Solution
 * DriverKey
 * v1.0 -- 2019
 * 
 * Developed by: Pablo Garcia
 * File: test.js
 * Description: Handles all the business logic for this protocol
 */

'use strict';
let test = require('../repository/test');

/**
 * Module Interface
 * @type {Object}
 */
let expose = {
  getDepartments  : undefined,
  emailTest:undefined
};

expose.emailTest = (data,cb) => {
   let to_return = {
    success : null,
    error : null,
    data: null
  }
  test.emailTest(data, (result) => {
    to_return.success = true;
    to_return.data = result.data;
    
    cb(to_return); 
  });
   
}
/**
 * This method performs a exists operation in database
 * @param  {Function}
 * @return {callback}
 */
expose.getDepartments = (data,cb) => {
  let to_return = {
    success : null,
    error : null,
    data: null
  }

  test.getDepartments(data, (result) => {
    if (result.error) {
      global.log4us.error(`Error getting test: ${result.detail}`);
      to_return.error = true;
      to_return.success = false;
      cb(to_return);
    }

    to_return.success = true;
    to_return.data = result.data;
    
    cb(to_return);

  })
}

// expose this file as a module based on the expose object
module.exports = expose;
