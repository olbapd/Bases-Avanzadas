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
  request.execute('sp_login',(err,result)=>{
  	if (err) {
      global.log4us.error(`Error logging in: ${err}`);
      to_return.error=err;
      to_return.success=false;
      cb(to_return);
  	  return;
  	}
    else if(result.recordset.length ==0){
      to_return.error="User does not exist";
      to_return.success=false;
      cb(to_return);
      return;
    }
  	else if(data.pass == result.recordset[0].Contrasena){
  		to_return.success = true;
  		to_return.data={
        IdEmpleado: result.recordset[0].IdEmpleado,
        Nombre: result.recordset[0].Nombre,
        Apellido1: result.recordset[0].Apellido1,
        Apellido2: result.recordset[0].Apellido2,
        Cedula: result.recordset[0].Cedula,
        FechaNacimiento: result.recordset[0].FechaNacimiento,
        Fechaingreso: result.recordset[0].Fechaingreso,
        IdDepartamento: result.recordset[0].IdDepartamento,
        IdSede: result.recordset[0].IdSede,
        IdPuesto: result.recordset[0].IdPuesto,
        Correo: result.recordset[0].Correo,
        Foto: result.recordset[0].Foto,
      };
  		cb(to_return);  		
      return;
  	}
  	else{
      to_return.error="Incorrect username or password.";
	  	to_return.success = false;
	  	to_return.data=false;
	  	cb(to_return);  			
      return;
  	}
  })
}

module.exports = expose;
