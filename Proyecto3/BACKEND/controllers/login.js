//login

User = require('../models/user');
Crypth = require('../sec/crypth');

exports.view = function (req, res) {
    User.find({ username: req.body.username }, function (err, user) {
        if (err) {
            res.json({
                error:true,
                message: err,
            });
            return
        }
        else if (user[0]==null){
            res.json({
                status:false,
                data:user
                
            });
            return

        }
        else if(Crypth.decode(req.body.pass,user[0].pass)) {
            res.json({
                status: true,
                data:user
            });
            return
        }
        else {
            res.json({
                status:false,
                data:[]
            });
            return
        }
        
    });
};