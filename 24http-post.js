const http=require('http');
const fs=require('fs');

let body='';

http.createServer((req,res)=>{
    if(req.method==='GET')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./a.html','UTF-8',(err,data)=>{
            if(err) throw err;
            res.write(data);
            res.end();
        })
    }


    else if(res.method==='POST')              //form here we are just checking
                                            // the post data which is enter into in html page
        {
            req.on('data',data=>{           //here we are listing the data 
                body += data;
            })
            res.on('end',()=>{              //here we also listing to the end of the request 
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(body,()=>{
                    res.end();
                });
            });

        }
    else
        {
            res.writeHead(404,{'Content-Type':'text/plain'});
            res.end('404 error can be occured because of the wrong url')
        }


}).listen(2222);
console.log('working fine');

