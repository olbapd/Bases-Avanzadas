/**
 * Ingenieria en Computadores
 * Proyecto 1
 * v1.0 -- 2019
 * 
 * Developed by: Pablo Garcia
 * File: sqlserver.js
 * Description: sqlserver Interface to get the connection pool
 */

'use strict';

let config = require('config');
let currentConfig = config.get('sqlserver');
const sqlserver = require('mssql');

let pool = null;

let instance = {
  getPool : null,
}

let initializePool = () => {
  if(!pool){
    global.log4us.print(`Creating connection to database server (${currentConfig.server})`);
    pool = new sqlserver.ConnectionPool(currentConfig);
    pool.connect(err =>{
      if (err!=null){
        global.log4us.error(`Error creating connection to database server (${currentConfig.server}), retrying conection...`);  
        console.log(err);
      }
    });
  }
}

instance.getPool = () => {
  initializePool();
  return pool;  
}

  
module.exports = instance;