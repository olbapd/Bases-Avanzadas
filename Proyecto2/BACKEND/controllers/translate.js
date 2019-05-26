trans = require('../translate/test');

// Handle view libro info by tema
exports.translateTo = function (req, res) {
        res.json({
            status: true,
            data: trans.prueba(req.params.fromLang,req.params.toLang,req.params.text)
        });
};