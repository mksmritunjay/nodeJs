const http=require('http');
const https=require('https');
const fs=require('fs');
const url='https://jsonplaceholder.typicode.com/posts';
http.createServer((req,resServer)=>{
    if(req.method==='GET' && req.url==='/post')
    {
        http.get(url,(httpResp)=>{
            httpResp.on('data',data=>{
                httpResp.setEncoding('utf8');
                console.log(data);
            });
            httpResp.on('end',()=>{
                resServer.end();
                console.log('server get endend');           
            })
        })
    }
}).listen(3123)
console.log('server get started');
