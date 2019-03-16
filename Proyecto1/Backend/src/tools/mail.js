/**
 * Ingenieria en Computadores
 * Proyecto 1
 * v1.0 -- 2019
 * 
 * Developed by: Pablo Garcia
 * File: mail.js
 * Description: SMTP interface to send and queue emails
 */


'use strict';

let nodemailer = require('nodemailer');
let smtpTransport = require('nodemailer-smtp-transport');
let config = require('config');

let setup = config.get('mail');

let transporter = null;

let expose = {
  queue : undefined,
  sendEmail : undefined,
  verifyConnection : undefined
};


let initializeConnection = () => {
  if(!transporter){
    transporter = nodemailer.createTransport(setup);
  }
}

expose.queue = (to, subject, body) => {
  // Send in-situ if works then save it as sent if fails then add to queue to send
  expose.sendEmail(to,subject,body); // Needs to be finished
}

expose.sendEmail = (to, subject, body) => {
  initializeConnection();
  const mailOptions = {
    sender: setup.auth.user,
    from: setup.from,
    to: to,
    subject: subject,
    html: body
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      log4us.print(error);
    } else {
      // Good :D
    }
  });  
}

expose.verifyConnection = () => {
  initializeConnection();
  // verify connection configuration
  transporter.verify(function(error, success) {
    if (error) {
      log4us.log(error);
    } else {
      log4us.print(`Email server (${config.get('mail.host')}) is ready to take our messages`);
    }
  });
}



module.exports = expose;