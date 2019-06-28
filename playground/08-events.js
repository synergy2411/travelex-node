// const EventEmitter = require("events").EventEmitter;
// const emitter = new EventEmitter();

// emitter.setMaxListeners(20);

// function handler(data) {
//     console.log("Handler Fired  for " + data.eventName);
// }


// emitter.once("foo", handler);


// emitter.on("foo", handler);

// emitter.once("bar", handler);

// emitter.on("foo", function () {
//     console.log("Foo Event Fired!")
// })           // capture the event

// emitter.emit("foo", { eventName: "Foo Event" })      // produce the event in system

// emitter.emit("bar", { eventName: "Bar Event" })



// // Process

// process.on("uncaughtException", function(err){
//     console.log("Global Error Handler");
// })


// setTimeout(()=>{
//     process.exit(0);
// }, 5000)

// process.on("SIGINT", function(){
//     console.log("SIGINT....")
// })