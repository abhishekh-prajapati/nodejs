const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('Waterfall', ()=>{
    console.log('please turn off the motor!');
    setTimeout(()=>{
        console.log('please turn off the mottor! this is the gentle reminder');
    }, 3000)
});
console.log("the script is running")
myEmitter.emit('Waterfall');
console.log("the script is still running")