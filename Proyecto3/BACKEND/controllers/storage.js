"use strict";

// Module that handles the RESTful service routes
let express = require('express');


let router = module.exports = express.Router();

let randomstring = require('randomstring');
let path = require('path');
let config = require('config');
let fs = require('fs');


/**
 * Main Handler
 */
router.use(function(req,res,next){
  next();
});


let generateName = (filename) => {
  const extension = path.extname(filename);
  const name = randomstring.generate({
    length: 59,
    charset: 'alphabetic'
  });
  return `${name}${extension}`;
}

router.post("/put", function(req,res){
  if(req.files){
    let file = req.files.fileUploaded
    if(config.get('api.persistent.allowed').includes(path.extname(file.name))){
      let filename = generateName(file.name);
      file.mv(`${config.get('api.persistent.path')}${filename}`,(err) => {
          if(err){
              console.log(err);
              res.json({
                success : false,
                detail: err
              });
          }else{
            res.json({
              success : true,
              hash : filename
            }); 
          }
      })
    }else{
      res.json({
      success : false,
      detail : 'File type not allowed, see docs.'
    });
    }
  }else{
    res.json({
      success : false,
      detail : 'No files detected'
    });
  }
})

router.get('/pull/:id', (req,res) => {
  const file = `${config.get('api.persistent.path')}${req.params.id}`
  if(fs.existsSync(file)){
    res.download(file);
  }else{
    res.status(404).json({
      success : false,
      detail : 'The file does not exists'
    });
  }

})