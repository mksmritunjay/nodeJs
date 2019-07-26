var {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true},function(err,client){
    
    var d=new ObjectID();
    console.log(d);

    console.log('database connected');
    
    

    // const db=client.db('animal');       //database or document 

    // db.collection('four_leg_animal').insert({        //table or collection
    //     name:'fox'

    // },(err,result)=>{
    //     if(err){return console.log(err) }
    //     console.log('Inserted');
        
    
    // });
    
});