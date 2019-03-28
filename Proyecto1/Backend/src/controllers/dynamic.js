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
const sqlserver = require('mssql');

let router = module.exports = express.Router();


let getSp = (req,res) => {

    console.log(sqltool.getPool());
    sqltool.getPool().connect(err=>{
      console.log(err);
    }) 
    let request =  new sqlserver.Request(sqltool.getPool());
    let typesIn = req.body.typesIn;
    let typesOut = req.body.typesOut;
    let inputs = req.body.parameters;
    let values = req.body.values;
    let outputs = req.body.ouputs;
    let spName = req.body.name;
    for(let i =0;i<inputs.length;i++){
      if(typesIn[i]=="int"){
        request.input(inputs[i],sqlserver.Int,values[i]);
      }
      else if(typesIn[i]=="varchar"){
        request.input(inputs[i],sqlserver.NVarChar,values[i]);
      }
      else if(typesIn[i]=="date"){
        request.input(inputs[i],sqlserver.DateTime,values[i]);
      }
      else{
        global.log4us.error('Error on building sp: '+spName);
      }
    }

    for(let i =0;i<outputs.length;i++){
      if(typesOut[i]=="int"){
        request.input(outputs[i],sqlserver.Int);
      }
      else if(typesOut[i]=="varchar"){
        request.input(outputs[i],sqlserver.NVarChar);
      }
      else if(typesOut[i]=="date"){
        request.input(outputs[i],sqlserver.DateTime);
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
        console.error(err);
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
/*
router.post('/*', (req, res) => {
  const data = {
       typesIn: req.body.typesIn,
      typesOut: req.body.typesOut,
      inputs: req.body.parameters,
      values: req.body.values,
      ouputs: req.body.ouputs,
      name: req.body.name
  }

  db.storedProcedure(data, (result)=>{
    if(result.error){
      res.status(503).json({
        error : 'Internal Server Error, it has been registered.'
      })
      return;
    }

    res.json(result);

  })
  
});*/
