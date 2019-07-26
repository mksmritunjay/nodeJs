// //Now we are using mongoose database because it is simple and in this it easy to perform the CRUD operation

var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mongoose_basics', {useNewUrlParser: true})
 
   
console.log('connected to the database');



// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/student',{useNewUrlParser: true});


// mongoose.connection
//     .once('open',()=>connect.log('connected'))
//     .on('error',(err)=>{
//         console.log(`could not connect`,err);
//