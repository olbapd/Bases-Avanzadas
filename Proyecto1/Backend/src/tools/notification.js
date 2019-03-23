
'use strict';

let fs = require('fs'),
    config = require('config');


let mail = require('./mail');

let expose = {
  emailVerification : undefined,
  emailConfirmation : undefined
};



expose.emailVerification = (lang, email, name ,code) => {
  // load set up data
  /*const selectedlang = getLang(lang);
  const template_path = config.get('authentication.account-verification.notifications.verification.template');
  const url_verification = `${config.get('authentication.account-verification.endpoint-verification')}${code}`;
  const subject = config.get(`authentication.account-verification.notifications.verification.subject.${selectedlang}`);
  const date = new Date().toLocaleString();

  // Load email verification template
  fs.readFile( `${__dirname}/../../templates/${selectedlang}_${template_path}`, (err, data) => {
    if (err) {
      global.log4us.error(`Error loading mail verification template: ${err}`)
    }
    
    let template  = data.toString();

    template = applyParameter(template, '$name$', name);
    template = applyParameter(template, '$url_forward$', url_verification);
    template = applyParameter(template, '$date$', date);

    mail.queue(email, subject, template);
    
  });*/
}

module.exports = expose;