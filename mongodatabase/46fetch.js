var {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true},function(err,client){
 
    if(err) throw err;
    var d=new ObjectID();
    console.log(d);

    console.log('connected');
    
    const db=client.db('animal');
    //from here the code is to fetch the data from the monogodb with the help of id

    db.collection('four_leg_animal').find().toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        
    })
    
    
})