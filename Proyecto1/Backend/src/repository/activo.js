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
let config = require('config');
let fs = require('fs');


/**
 * Module Interface
 * @type {Object}
 */
let expose = {
  emailAssignActive  : undefined,
};

let escapeRegExp = (str) => {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

let applyParameter = (template,parameter, value) => {
  //return template.replace(new RegExp(parameter, 'g'), value);
  return template.replace(new RegExp(escapeRegExp(parameter), 'g'), value);
}

expose.getDepartments = (data, cb) => {
  let to_return = {
    error : null,
    success : null,
    exists : null,
    detail : null,
    data: null
  };
  
  sql.connect(config.get('sqlserver2')).then(pool => {
    
    let request = pool.request();
    let typesIn = data.typesIn;
    let typesOut = data.typesOut;
    let inputs = data.inputs;
    let values = data.values;
    let outputs = data.ouputs;
    let spName = data.name;
    console.log("inputs",inputs.length);
    for(let i =0;i<inputs.length;i++){
      console.log("in out");
      if(typesIn[i]=="int"){
        request.input(inputs[i],sql.Int,values[i]);
      }
      else if(typesIn[i]=="varchar"){
        request.input(inputs[i],sql.NVarChar,values[i]);
      }
      else if(typesIn[i]=="date"){
        request.input(inputs[i],sql.DateTime,values[i]);
      }
      else{
        global.log4us.error('Error on building sp: '+spName);
      }
    }

    for(let i =0;i<outputs.length;i++){
      console.log("in out");
      if(typesOut[i]=="int"){
        request.input(outputs[i],sql.Int);
      }
      else if(typesOut[i]=="varchar"){
        request.input(outputs[i],sql.NVarChar);
      }
      else if(typesOut[i]=="date"){
        request.input(outputs[i],sql.DateTime);
      }
      else{
        global.log4us.error('Error on building sp: '+spName);
      }
    }
    
    request.execute(spName , (err,result) => {
      if (err) {
        global.log4us.error('Error on sp ('+spName+'):'+err);
        to_return.error = true;
        to_return.detail = err;
        cb(to_return);
      }
      to_return.success = true;
      to_return.data=result;
      console.log(to_return.data);
      
      cb(to_return);
    });


    /*return pool.request()
      .input('IdProvincia', sql.Int, 1)
      .execute('getProvincias')
  }).then(result => {
      console.log(result);
  }).catch(err => {
    console.log(err);
  })*/
  });
}

expose.emailAssignActive = (email,name) => {
  console.log("Here");
  const template_path = config.get('mail-info.template');
  const subject = config.get('mail-info.subject');
  const date = new Date().toLocaleString();
  fs.readFile( `${__dirname}/../../templates/${template_path}`, (err, data) => {
    if (err) {
      global.log4us.error(`Error loading mail assign active template: ${err}`)
    }
    let template  = data.toString();
    template = applyParameter(template, '$name$', name);

    mail.queue(email,subject,template);
    console.log("check email.");
  });
}

// expose this file as a module based on the expose object
module.exports = expose;
