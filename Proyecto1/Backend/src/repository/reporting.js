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
let ssrs = require('mssql-ssrs');
let url = "http(s)://PABLO-LAPTOP:80/ReportServer/Report Parts";
var serverConfig = {
    server: 'PABLO-LAPTOP',
    instance: 'SSR',
    isHttps: true, 
    port: '80', 
};

let config = { username: 'api', password: 'admin' };
let dataSourceDefinition = {
  Extension: 'SQL',
  ConnectString: 'Data Source=PABLO-LAPTOP;\\SSR;Initial Catalog=Proyecto1BDA'
}
/**
 * Module Interface
 * @type {Object}
 */
let expose = {
  getReport  : undefined,
};

expose.getReport = async function(data,cb){
  let to_return = {
    error : null,
    success : null,
    data: null
  };
  //let fileList = await ssrs.download(url);
  //console.log(fileList)
  
  await ssrs.reportService.start(url, config, null, 'basic');
  let client = await ssrs.reportService.getClient();  
  let clientDescription = await ssrs.reportService.getDescription();
  //let reportList = await ssrs.reportService.listChildren(reportPath[, isRcursive]);
  let status = await ssrs.reportService.testDataSourceConnection(config.username, config.password, dataSourceDefinition);
  console.log(status);

}


// expose this file as a module based on the expose object
module.exports = expose;
