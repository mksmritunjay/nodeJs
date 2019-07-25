const express=require('express');
let app=express();
app.get('/',(req,res)=>{
    res.send('This is the home page if you change the url then you get smth different');
});
app.get('/post/:id/category/:category_id',(req,res)=>{
    res.send(`

        <p>Here is ${req.param.id}</p>

    `)
});
app.listen(10);
console.log('Server is running fine ');
