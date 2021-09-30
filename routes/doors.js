const myModule = require('./index');
let ndoors=myModule.simulateJson(3, true, 100).numDoors;
const response = {
doors: {ndoors},
}
console.log("Doors="+response.doors);
