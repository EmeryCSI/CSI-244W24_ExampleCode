//an event is an action or occurence that gets recognized by software
//the function that fires is referred to as an event handler

//we import the events module
const events = require("events");

//eventemitter thats what sends the event
//event handler responds to the emitter
function event1Handler(args) {
  console.log("Event 1 triggered");
}
//lets create an eventEmitter
const eventEmitter = new events.EventEmitter();
//the on function associated a given hander with a given event
eventEmitter.on("event1", event1Handler);
//emit() is what fires the event
eventEmitter.emit("event1");
//make another event using on and an arrow function
eventEmitter.on("event2", (args) => {
  console.log("Event 2 triggered");
  console.log(args);
});
eventEmitter.emit("event2", {
  eventId: 2,
  eventMessage: "this is the message",
});
