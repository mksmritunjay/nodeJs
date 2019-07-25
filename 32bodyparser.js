const express=require('express');
const bodyParser=require('body-parser');

let app=express();

app.use(bodyParser.json());

app.use('/rockon ',express.static(__dirname +'/style'));


app.use((req,res,next)=>{
    console.log('middleware');
    next();
    
});

app.listen(2222);
console.log('Server is working fine');
