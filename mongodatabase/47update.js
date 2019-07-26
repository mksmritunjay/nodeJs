var {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true},function(err,client){
 
    if(err) throw err;
    var d=new ObjectID();
    //console.log(d);

    console.log('connected');
    
    const db=client.db('animal')

    db.collection('four_leg_animal').findOneAndUpdate({
        _id:new ObjectID('5d3afadfc2a1b1411ccdf7cd')
    },
    {
        $set:{name:'update_animal'}
    })
    console.log('update sucessfully');
    



})
