#!/usr/bin/env node
var http = require('http');
// When you have your own Client ID and secret, put down their values here:
var clientId = "FREE_TRIAL_ACCOUNT";
var clientSecret = "PUBLIC_SECRET";

var res;

exports.prueba = function(fromLang, toLang, text) {
    jsonPayload = JSON.stringify({
        fromLang: fromLang,
        toLang: toLang,
        text: text
    });

    options = {
        hostname: "api.whatsmate.net",
        port: 80,
        path: "/v1/translation/translate",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-WM-CLIENT-ID": clientId,
            "X-WM-CLIENT-SECRET": clientSecret,
            "Content-Length": Buffer.byteLength(jsonPayload)
        }
    };
    request = new http.ClientRequest(options);
    request.end(jsonPayload);
    request.on('response', function (response) {
        console.log('Status code: ' + response.statusCode);
        response.setEncoding('utf8');
        response.on('data', function (chunk) {
            console.log('Translated text:');
            console.log(chunk);
            res=chunk;
        });
    });
    return res;
} 