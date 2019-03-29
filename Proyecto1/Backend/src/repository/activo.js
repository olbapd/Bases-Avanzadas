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


expose.emailAssignActive = (email,name) => {
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
