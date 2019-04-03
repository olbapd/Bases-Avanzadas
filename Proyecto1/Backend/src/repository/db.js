
'use strict';

let sql = require('mssql');
let sqlServer = require('../tools/sqlserver');

let expose = {
  storedProcedure  : undefined,
};

expose.storedProcedure = (data, cb) => {
  let to_return = {
    error : null,
    success : null,
    detail : null,
    data: null
  };
  let servers = sqlServer.getServers();
  let i =0;
  let lastError="";
  console.log("In sp dynamic.");
  while(i<servers.length){
    try{
      sql.connect(servers[i]).then(pool => {
      
        let request = pool.request();
        let typesIn = data.typesIn;
        let typesOut = data.typesOut;
        let inputs = data.inputs;
        let values = data.values;
        let outputs = data.ouputs;
        let spName = data.name;
        for(let i =0;i<inputs.length;i++){
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
            to_return.success = false;
            to_return.detail = err;
            cb(to_return);
            return;
          }
          to_return.success = true;
          try{
            to_return.data=result.recordset;        
          }
          catch(err){
            to_return.data=result;        
          }
          
          cb(to_return);
          return;
        });
      });
      return;
    }catch(error){
      console.log(error);
      lastError=error;
      i++
    }
    global.log4us.error(`Could not create a connection to any database server. Error ${lastError}`);  
  }

  /*sql.connect(config.get('sqlserver2')).then(pool => {
    
    let request = pool.request();
    let typesIn = data.typesIn;
    let typesOut = data.typesOut;
    let inputs = data.inputs;
    let values = data.values;
    let outputs = data.ouputs;
    let spName = data.name;
    for(let i =0;i<inputs.length;i++){
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
        to_return.success = false;
        to_return.detail = err;
        cb(to_return);
      }
      to_return.success = true;
      try{
        to_return.data=result.recordset;        
      }
      catch(err){
        to_return.data=result;        
      }
      
      cb(to_return);
    });
  });*/
}

module.exports = expose;
