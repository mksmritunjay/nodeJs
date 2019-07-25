const http=require('http');
const fs=require('fs');
// http.createServer((req,res)=>{
//     //console.log(req);
//     console.log(req.method);
      
// }).listen(1234);    


http.createServer((req,res)=>{
    if(req.url==='/')
    {
        fs.readFile('./login.html','UTF-8',(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(data);
        })
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end();
    }
    
}).listen(1234)
console.log('Server get started'); 
