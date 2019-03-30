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
let currentConfig = config.get('sqlserver2');
const sqlserver = require('mssql');


/*
const poolPromise = new sqlserver.ConnectionPool(currentConfig)
  .connect()
  .then(pool =>{
        global.log4us.print(`Creating connection to database server (${currentConfig})`);
        return pool;
  })
  .catch(err => global.log4us.error('Database Connection Failed! Bad Config: ', err));

let instance = {
  sqlserver,
  poolPromise
}*/

let pool = null;

let instance = {
  getPool : null,
//  getNewRequest : null
}

let initializePool = () => {
  if(!pool){
    global.log4us.print(`Creating connection to database server (${currentConfig.server})`);
    pool = new sqlserver.ConnectionPool(currentConfig);
    pool.connect(err =>{
      global.log4us.error(`Error creating connection to database server (${currentConfig.server}), retrying conection...`);  
    })
  }
}

instance.getPool = () => {
  initializePool();
  return pool;  
}

  
module.exports = instance;

/*
const sql = require('mssql')
const config = {...}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}
 */