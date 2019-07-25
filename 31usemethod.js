const express=require('express');
let app=express();
 
app.use((req,res,next)=>{
    res.send('Middleware method ');
    console.log('Running method ');
    
    next();
});



app.get('/api',(req,res)=>{
    res.send(`
    <html>
    <head>
        <title>tiles</title>
        <h3>Login Page </h3>

        <link rel="stylesheet" href="./logincss.css">
    
    </head>
    <body>
        <h5>This is the first page</h5>
        <form class="register-form" method="POST">
            <input type="text" placeholder="name"/>
            <input type="password" placeholder="password"/>
            <input type="text" placeholder="email address"/>
            <button>create</button>
    </body>
</html>

    
    
    
    `);
    console.log('only localhost');
    

});
app.listen(9999);
console.log('Server is running fine');
