const WebSocketServer=require('ws').Server;
const wss=new WebSocketServer({port:3111});

wss.on('connection',(ws)=>{

    console.log('web is connected');
    
});