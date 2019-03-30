
'use strict';
let auth = require('../repository/authentication');

/**
 * Module Interface
 * @type {Object}
 */
let expose = {
  login  : undefined,
  register: undefined
};

expose.login = (data,cb) => {
  let to_return = {
    success : null,
    error : null,
    data: null
  }

  auth.login(data, (result) => {
    if (result.error) {
      global.log4us.error(`Error getting authentication: ${result.error}`);
      to_return.error = result.error;
      to_return.success = false;
      cb(to_return);
      return;
    }
    to_return.success = true;
    to_return.data = result.data;
    cb(to_return);

  })
}


// expose this file as a module based on the expose object
module.exports = expose;
