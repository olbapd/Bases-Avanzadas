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
let servers = config.get('sqlservers');
const sqlserver = require('mssql');

let pool = null;

let instance = {
  getPool : null,
  getServers: null,
  getCurrentPool:null
}

let initializePool = () => {
  if(!pool){
    let i =0;
    while(i<servers.length){
    //for (let i = 0; i < servers.length; i++) {
      try{
        global.log4us.print(`Creating connection to database server (${servers[i].server})`);
        pool = new sqlserver.ConnectionPool(servers[i]);
        pool.connect(err =>{
          if (err!=null){
            global.log4us.error(`Error creating connection to database server (${servers[i].server}), retrying conection...`);  
            console.log(err);
          }
        });
        return;
      }catch(error){
        i++;
      }
    }
    global.log4us.error(`Could not create a connection to any database server.`);  
            
    /*global.log4us.print(`Creating connection to database server (${currentConfig.server})`);
    pool = new sqlserver.ConnectionPool(currentConfig);
    pool.connect(err =>{
      if (err!=null){
        global.log4us.error(`Error creating connection to database server (${currentConfig.server}), retrying conection...`);  
        console.log(err);
      }
    });*/
  }
}

instance.getPool = () => {
  initializePool();
  return pool;  
}

instance.getCurrentPool = () => {
   console.log(pool.connected);
}
instance.getServers= () =>{
  return servers;
}  

  
module.exports = instance;