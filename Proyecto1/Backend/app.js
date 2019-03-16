'use strict'


let express = require('express'),
    upload = require('express-fileupload'),
    cors = require('cors'),
    path = require('path'),
    bodyParser  = require('body-parser'),
    config = require('config');


let mail = require('./src/tools/mail');
let sql = require("mssql");

global.log4us = require('./src/tools/log4us')();


let app = express();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000 }));


app.disable('etag'); // Avoid 304 requests
app.use(cors()); // Enable request from any server
app.options('*', cors()) // include before other routes
app.use(upload()); // Move to req.files any uploaded file


app.use('/',express.static('public'))

app.get('/',function(req,res){
  res.send('This is a microservice, please see docs')
})



/// Main router of the api
let handlerModule = require('./src/controllers/handler')
app.use('/api/', handlerModule);



const port = config.get('api.port');
app.listen(port,() => {
  global.log4us.print(`Taken port ${port} to serve HTTP server`)
});

const persistent = config.get('api.persistent');
global.log4us.print(`Project API App started running`);
global.log4us.print(`Keeping persistent files on ${persistent.path}`);

// Start connection to DB server by getting pool by the first time
//mysql.getPool();
var connection = new sql.ConnectionPool(config.get('sqlserver'));

mail.verifyConnection();


/*
{
	"api" : {
	  "port" : 3000,
	  "persistent" : {
	    "allowed" : [".jpg",".png",".jpeg",".bmp",".PNG"],
	    "path" : "C:/APIUPLOADS/"
	  }
	},
	"sqlserver" :{
		"user"	  : "api",
	    "password": "api123",
	    "server"  : "localhost", 
	    "database": "Proyecto1" 
	},
	"mail" : {
	  "host" : "smtp.gmail.com",
	  "secure" : false,
	  "port" : 587,
	  "auth" : {
	    "user" : "ce.bases.avanzadas@gmail.com",
	    "pass" : "ce1bases"
	  },
	  "from" : "CeBases <no-reply@ce.bases.avanzadas.com>"
	},


}
 */