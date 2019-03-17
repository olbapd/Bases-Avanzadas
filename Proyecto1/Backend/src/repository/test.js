/**
 * Ingenieria en Computadores
 * Proyecto 1
 * v1.0 -- 2019
 * 
 * Developed by: Pablo Garcia
 * File: user.js
 * Description: Queries related to vehicles to the database.
 */

'use strict';

//let sqlserver = require('../tools/sqlserver.js');
let sql = require('mssql');
let mail = require('../tools/mail.js');

/**
 * Module Interface
 * @type {Object}
 */
let expose = {
  getDepartments  : undefined,
};


expose.getDepartments = (data, cb) => {
  //let pool = sqlserver.getPool();
  //let request = sqlserver.getNewRequest();
  
  let  config={
      user    : "api",
      password: "admin",
      server  : "localhost", 
      database: "Proyecto1"
  }

  let to_return = {
    error : null,
    success : null,
    exists : null,
    detail : null,
    data: null
  };
  console.log("in");
  //let request = new pool.Request();
  sql.connect(config).then(pool => {
      // Query
      
      return pool.request()
      .query('select * from Provincia')
  }).then(result => {
      console.log(result)
  }).catch(err => {
      console.log(err)
  })

  sql.on('error', err => {
     console.log(err)
  })
}

expose.emailTest = (data, cb) => {
  mail.queue("pablod.garciab@gmail.com","Testing","<h1>Hola</h1>");
  console.log("check email.");
}

// expose this file as a module based on the expose object
module.exports = expose;
