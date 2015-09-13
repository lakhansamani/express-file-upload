var express = require('express');
var router = express.Router();
var fs=require('fs');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express File Uploader' });
});
router.post('/file_upload',function(req,res){
	console.log(req.files.);
});
module.exports = router;
