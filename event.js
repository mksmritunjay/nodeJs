const event=require('events');
let emitter=new event.EventEmitter();
emitter.on('newEvent',(message)=>{
    console.log(`message is going to display ${message}`);
});
emitter.emit('newEvent','We are the listener of the emitter');
