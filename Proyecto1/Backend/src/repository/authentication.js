'use strict';

const sqlserver = require('mssql');
let config = require('config');
let sqltool = require('../tools/sqlserver');

let expose = {
  login  : undefined,
};



expose.login = (data, cb) => {
  let to_return = {
    error : null,
    success : null,
    data: null
  };
  let request =  new sqlserver.Request(sqltool.getPool());

  request.input('CorreoEmp',sqlserver.NVarChar,data.email);
  request.execute('sp_Login',(err,result)=>{
  	if (err) {
  	  global.log4us.error(`Error logging in: ${err}`);
      to_return.error=err;
      to_return.success=false;
      cb(to_return);
  	  return;
  	}
  	if(data.pass == result.recordset[0].Contrasena){
  		to_return.success = true;
  		to_return.data=true;
  		cb(to_return);  		
  	}
  	else{
	  	to_return.success = true;
	  	to_return.data=false;
	  	cb(to_return);  			
  	}
  })
}

module.exports = expose;
