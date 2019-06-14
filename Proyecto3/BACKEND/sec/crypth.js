var crypto = require('crypto')
var secret = 'alpha'
var string = 'Perro'

exports.decode = function (input, pass) {
    var hash = crypto.createHmac('SHA256', secret).update(input).digest('base64');
    if (hash === pass) {

        console.log('match') // logs => 'match'
        return true
    } else {
        console.log('no match')
        return false
    }
}

exports.encode = function (input) {
    return crypto.createHmac('SHA256', secret).update(input).digest('base64');

}