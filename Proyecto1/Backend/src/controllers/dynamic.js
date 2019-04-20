/**
 * Ingenieria en Computadores
 * Proyecto 1
 * v1.0 -- 2019
 * 
 * Developed by: Pablo Garcia
 * File: dynamic.js
 * Description: Handles all the routes for dynamic queries on db
 */

'use strict';

// Module that handles the RESTful service routes
let express = require('express'),
    config = require('config'),
    request = require('request');


let db = require('../repository/db');
let sqltool = require('../tools/sqlserver');
const sql = require('mssql');

let router = module.exports = express.Router();

let currentConfig = config.get('sqlserver');
let servers = config.get('sqlservers');

/*
let getSp = (req,res) => {
  let typesIn = req.body.typesIn;
  let typesOut = req.body.typesOut;
  let inputs = req.body.parameters;
  let values = req.body.values;
  let outputs = req.body.ouputs;
  let spName = req.body.name;
  let i =0;
  while(i<servers.length){
    sql.connect(servers[i]).then(pool => {
      
      console.log(pool);
      let request =  new sql.Request(pool);
      for(let i =0;i<inputs.length;i++){
        if(typesIn[i]=="int"){
          request.input(inputs[i],sql.Int,values[i]);
        }
        else if(typesIn[i]=="varchar"){
          request.input(inputs[i],sql.NVarChar,values[i]);
        }
        else if(typesIn[i]=="float"){
          request.input(inputs[i],sql.Float,values[i]);
        }
        else if(typesIn[i]=="date"){
          let yourDate = new Date(values[i]);
          request.input(inputs[i],sql.DateTime,yourDate);
        }
        else{
          global.log4us.error('Error on building sp: '+spName);
        }
      }
      for(let i =0;i<outputs.length;i++){
        if(typesOut[i]=="int"){
          request.input(outputs[i],sql.Int,null);
        }
        else if(typesOut[i]=="float"){
          request.input(outputs[i],sql.Float);
        }
        else if(typesOut[i]=="varchar"){
          request.input(outputs[i],sql.NVarChar,null);
        }
        else if(typesOut[i]=="date"){
          request.input(outputs[i],sql.DateTime,null);
        }
        else{
          global.log4us.error('Error on building sp: '+spName);
        }
      }
      request.execute(spName, (err, recordset) => {
        if (err) {
          global.log4us.error(`Error getting ${spName}: ${err}`);
          res.status(500).json({
              success : false,
              error: err
          });
          return false;
        }
        return recordset.recordset;
        /*res.status(200).json({
          success : true,
          data: recordset.recordset
        }); //
      });
      
        return pool.request()
        .input('input_parameter', sql.Int, value)
        .output('output_parameter', sql.VarChar(50))
        .execute('procedure_name')
    }).then(result => {

        console.dir(result)
        
    }).catch(err => {
        console.log(err);
    })
     
    sql.on('error', err => {
        i++;
        console.log(err);
    })
  }
}*/


let getSp = (req,res) => {
     
    if(!sqltool.getPool().connected){
      global.log4us.log(`Verifying connection to database server (${currentConfig.server})`); 
      global.log4us.log(`Not connected to (${currentConfig.server}), creating new conectiion....`);  
      sqltool.getPool().connect(err=>{
        global.log4us.error(`Error creating connection to database server (${currentConfig.server}), retrying conection...`);
        console.log(err); 
        res.status(500).json({
            success : false,
            error: err
        });
        return 
      }) 
    }
    
    let request =  new sql.Request(sqltool.getPool());
    let typesIn = req.body.typesIn;
    let typesOut = req.body.typesOut;
    let inputs = req.body.parameters;
    let values = req.body.values;
    let outputs = req.body.ouputs;
    let spName = req.body.name;
    for(let i =0;i<inputs.length;i++){
      if(typesIn[i]=="int"){
        request.input(inputs[i],sql.Int,values[i]);
      }
      else if(typesIn[i]=="varchar"){
        request.input(inputs[i],sql.NVarChar,values[i]);
      }
      else if(typesIn[i]=="float"){
        request.input(inputs[i],sql.Float,values[i]);
      }
      else if(typesIn[i]=="date"){
        let yourDate = new Date(values[i]);
        request.input(inputs[i],sql.DateTime,yourDate);
      }
      else{
        global.log4us.error('Error on building sp: '+spName);
      }
    }
    for(let i =0;i<outputs.length;i++){
      if(typesOut[i]=="int"){
        request.input(outputs[i],sql.Int,null);
      }
      else if(typesOut[i]=="float"){
        request.input(outputs[i],sql.Float);
      }
      else if(typesOut[i]=="varchar"){
        request.input(outputs[i],sql.NVarChar,null);
      }
      else if(typesOut[i]=="date"){
        request.input(outputs[i],sql.DateTime,null);
      }
      else{
        global.log4us.error('Error on building sp: '+spName);
      }
    }
    request.execute(spName, (err, recordset) => {
      if (err) {
        global.log4us.error(`Error getting ${spName}: ${err}`);
        res.status(500).json({
            success : false,
            error: err
        });
        return;
      }
      res.status(200).json({
        success : true,
        data: recordset.recordset
      });
    });
}

router.post('/*', (req, res) => {
  getSp(req,res);
});
