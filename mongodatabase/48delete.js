const {MongoClient, ObjectId}=require('mongodb');
MongoClient.connect('mongodb://localhost/27017',{useNewUrlParser:true},function(err,client){
    if(err) throw err;
    

    var obj=new ObjectId();
    console.log('data base connected ');

    const db=client.db('animal');
    
    db.collection('four_leg_animal').findOneAndDelete({
        _id:new ObjectId('5d3afadfc2a1b1411ccdf7cd')
}).then(result=>{
    console.log(result);
    
})
   // console.log('deleted successfully');  
})