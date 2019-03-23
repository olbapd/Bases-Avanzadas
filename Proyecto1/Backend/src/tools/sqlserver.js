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
let sqlserver = require('mssql');


let pool = null;
let multpool=null;


let instance = {
  getPool : null,
  getNewRequest : null
}

let initializePool = () => {
  if(!pool){
    global.log4us.print(`Creating connection to database server (${config.get('sqlserver2.server')})`)
    pool = new sqlserver.ConnectionPool(config.get('sqlserver2'));
  }
}

instance.getPool = () => {
  initializePool();
  return pool;  
}

instance.getNewRequest = () => {
	let request = new sqlserver.Request(pool);
	return  request
}

module.exports = instance;
