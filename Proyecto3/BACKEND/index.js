// Import express
let express = require('express'),upload = require('express-fileupload');
// Import Body parser
let bodyParser = require('body-parser');
                 cors = require('cors');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();



// Add headers
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit:50000 }));
app.disable('etag'); // Avoid 304 requests
app.use(cors()); // Enable request from any server -> npm install cors
app.options('*', cors()) // include before other routes
app.use(upload()); // Move to req.files any uploaded file
// Import routes
let apiRoutes = require("./api-routes")
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//
// Connect to Mongoose and set connection variable
const url = 'mongodb+srv://Proyecto3:BDAp3@bda-eiqv0.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(url,{dbName: 'Proyecto3',useNewUrlParser: true});//ANTES DE CONECTAR RECORDAR AGREGAR IP A IPWHITELIST EN ATLAS
mongoose.set('useCreateIndex', true);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to ATLAS-Remote-MongoServe");
  // we're connected!
});
// Setup server port
var port = process.env.PORT || 3000;
// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to MongoDB micro-Service'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestApi on port " + port);
});