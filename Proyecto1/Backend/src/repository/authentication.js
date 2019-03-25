'use strict';

const sqlserver = require('mssql');
let config = require('config');
let sqltool = require('../tools/sqlserver');

let expose = {
  login  : undefined,
};



expose.login = (data, cb) => {
  //let pool = mysql.getPool();

  let to_return = {
    error : null,
    success : null,
    data: null
  };
  let request =  new sqlserver.Request(sqltool.getPool());
  request.input('CorreoEmp',sqlserver.NCarChar,data.email);
  request.execute('Validacion',(err,result)=>{
  	if (err) {
  	  global.log4us.error(`Error logging in: ${result.detail}`);
  	  res.status(500).json({
  	      success : false,
  	      error: err
  	  });
  	  console.error(err);
  	  return;
  	}
  	console.log(result);
  	if(data.pass == result.recordset){
		to_return.success = true;
		to_return.data=true;
		console.log(to_return.data);		
		cb(to_return);  		
  	}
  	else{
	  	to_return.success = true;
	  	to_return.data=false;
	  	console.log(to_return.data);		
	  	cb(to_return);  			
  	}
   /*if(error){
      to_return.error = true;
      to_return.detail = error
      cb(to_return);
    }

    to_return.success = true;
    to_return.data=results;
    console.log(to_return.data);
    
    cb(to_return);    */

  })
}

module.exports = expose;
