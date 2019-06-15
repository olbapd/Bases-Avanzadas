// Import express
let express = require('express'),
	upload = require('express-fileupload'),
	bodyParser = require('body-parser'),
    cors = require('cors'),
	mongoose = require('mongoose'),
	config = require('config');

let app = express();

// Add headers
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000 }));
app.disable('etag'); // Avoid 304 requests
app.use(cors()); // Enable request from any server -> npm install cors
app.options('*', cors()) // include before other routes
app.use(upload()); // Move to req.files any uploaded file


app.use('/',express.static('public'))
app.get('/',function(req,res){
  res.send('This is a microservice, please see docs')
})

/// Main router of the api
let handlerModule = require('./src/controllers/handler')
app.use('/api/', handlerModule);

// Connect to Mongoose and set connection variable
//const url = config.get('atlas.url');
const url = 'mongodb+srv://Proyecto3:BDAp3@bda-eiqv0.mongodb.net/test?retryWrites=true&w=majority';
//mongoose.connect(url,{dbName: config.get('atlas.dbName'),useNewUrlParser: true});//ANTES DE CONECTAR RECORDAR AGREGAR IP A IPWHITELIST EN ATLAS
mongoose.connect(url,{dbName: "Proyecto3",useNewUrlParser: true});//ANTES DE CONECTAR RECORDAR AGREGAR IP A IPWHITELIST EN ATLAS
mongoose.set('useCreateIndex', true);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {	
    console.log("Connected to ATLAS-Remote-MongoServe");
  // we're connected!
});


const port =config.get('api.port');
app.listen(port, function () {
    console.log("Running RestApi on port " + port);
});
