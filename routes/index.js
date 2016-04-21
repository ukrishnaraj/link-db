var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/post',function(req,res){
  var number1= req.param("num1");
  var number2= req.param("num2");
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    if(!err) {
      console.log("We are connected");
    } else {
      console.log('Not connected');
    }
    var collection= db.collection('testdb');
    var doc1= {number1:number2};
    collection.insert(doc1);
    res.send({status:"success"});
  });
});
router.get('/get',function(req,res){
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
    var collection= db.collection('testdb');
    collection.find().toArray(function (err, items) {
      if (!err) {
        console.log(items);
      }
      res.send(items);
    });
  });
});
router.get('/get',function(req,res){

})
module.exports = router;
