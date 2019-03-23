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

//let webToken = require('../tools/webtoken.js');

let db = require('../repository/db')

let router = module.exports = express.Router();


router.post('/*', (req, res) => {
  const data = {
       typesIn: req.body.typesIn,
      typesOut: req.body.typesOut,
      inputs: req.body.inputs,
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
  
});
