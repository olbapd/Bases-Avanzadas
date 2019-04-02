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
const sqlserver = require('mssql');
let mail = require('../tools/mail.js');
let sqltool = require('../tools/sqlserver');
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

expose.assignActive = (data,cb) =>{
  let to_return = {
    error : null,
    success : null,
    data: null
  };

  let request =  new sqlserver.Request(sqltool.getPool());
  
  request.input('Codigo',sqlserver.NVarChar,data.codigo);
  request.input('Cedula',sqlserver.NVarChar,data.cedula);
  request.input('IdEstado',sqlserver.NVarChar,data.idEstado);
  request.input('DetalleUbi',sqlserver.NVarChar,data.detalleUbi);
  request.output('Correo',sqlserver.NVarChar,null);
  request.output('Nombre',sqlserver.NVarChar,null);
  request.output('Apellido',sqlserver.NVarChar,null);
  //request.input('IdEmpleado',sqlserver.Int,data.idEmployee);
  //request.input('IdActivo',sqlserver.Int,data.idActivo);
  request.execute('sp_assignActive',(err,result)=>{
      if (err) {
        global.log4us.error(`Error assiging active: ${err}`);
        to_return.error=err;
        to_return.success=false;
        cb(to_return);
        return;
      }
      if(result.output.Correo ==null){
        to_return.success=true;
        to_return.data=false;
        cb(to_return);
        return;
      }
      let name = result.output.Nombre + " "+result.output.Apellido;
      emailAssignActive(result.output.Correo,name);
      to_return.success=true;
      to_return.data=true;
      cb(to_return);
  });
}

let emailAssignActive = (email,name) => {
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
  });
}

// expose this file as a module based on the expose object
module.exports = expose;
