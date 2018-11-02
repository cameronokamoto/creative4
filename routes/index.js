var express = require('express');
var router = express.Router();
var fs = require('fs');
  
  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root:  'public' });
});

router.get('/getquestion',function(req,res,next) {
    var myNum = req.query.q;

    fs.readFile(__dirname + '/questions.txt',function(err,data) {
        if(err) throw err;
        var questions = data.toString().split("\n");
      
        var jsonresult = [];
        jsonresult.push({question:questions[myNum]});
        console.log(jsonresult);
        res.status(200).json(jsonresult);
    });
});

 function displaytext(jsonresult)
 {
     document.write (jsonresult);
 }

module.exports = router;