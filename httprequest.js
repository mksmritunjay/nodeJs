var http=require('http');
var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h2>Hi this is mritunjai sharma<h2>');
})
server.listen(2000);
console.log('our server is running ');
