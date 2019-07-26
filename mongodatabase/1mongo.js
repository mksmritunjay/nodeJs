//Code to connect with the mongodb
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals',{ useNewUrlParser: true },function(err,db){
//MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
  if (err) throw err
  console.log('connected');
  

//   var db = client.db('animals')

//   db.collection('mammals').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result)
//  })
})