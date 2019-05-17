var crypto = require('crypto');
var hash = crypto.createHash('sha256').update("Perro").digest('base64');
var hash2 = crypto.createHash('sha256').update("Perro").digest('base64');
console.log(hash);
console.log(hash2);