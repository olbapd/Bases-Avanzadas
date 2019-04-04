
'use strict';
let banco = require('../repository/banco');

/**
 * Module Interface
 * @type {Object}
 */
let expose = {
  getCambio  : undefined
};

expose.getCambio = (data,cb) => {
 let to_return = {
     success : null,
     error : null,
     data: null
   }

   banco.getCambio(data, (result) => {
     if (result.error) {
       global.log4us.error(`Error getting exchange rate: ${result.detail}`);
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

module.exports = expose;
