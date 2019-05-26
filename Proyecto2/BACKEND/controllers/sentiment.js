Rating = require('../models/rating');

exports.index = function (req, res) {
    Rating.get(function (err, rates) {
        if (err) {
            res.json({
                error: true,
                message: err,
            });
            return
        }
        var ratescant = rates.length;
        var lista = new Array();
        for (let i = 0; i < ratescant; i++) {
            async function main() {
                // Imports the Google Cloud client library
                const language = require('@google-cloud/language');
              
                // Instantiates a client
                const client = new language.LanguageServiceClient();
              
                // The text to analyze
                const text = rates[i].comentario;
              
                const document = {
                  content: text,
                  type: 'PLAIN_TEXT',
                };
              
                // Detects the sentiment of the text
                const [result] = await client.analyzeSentiment({document: document});
                const sentiment = result.documentSentiment;
                lista.push({"libreria":rates[i].libreria,"comentario":rates[i].comentario,"score":sentiment.score});
              
                console.log(`Text: ${text}`);
                console.log(`Sentiment score: ${sentiment.score}`);
              }
              
              main().catch(console.error);
            }
            setTimeout(function(){ 
            res.json({
                status: true,
                data: lista
            })}, 3000);
            
        }); 

};