const exprss=('express');
let app=exprss();

app.get('/',(req,res)=>{
    res.send('<h3>This is the routing home page </h3>');
})

// app.get('/api',(req,res)=>{
//     res.send('<h5>API page get hitted</h5>');
// });
app.listen(4444);
console.log('server working fine');
