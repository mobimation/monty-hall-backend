// Test of response JSON format
// Simulator mod produces JSON data.
// Studying printout is simple visual test
const myModule = require('./index');
let ndoors=myModule.simulateJson(3, true, 100).numDoors;
const response = {
doors: {ndoors},
 itera: {iter},
 percent: {percentage}
}
console.log("Number of doors: ",response.doors);
console.log("Change door",response.change);
console.log("Iterations",response.itera);
console.log("Percentage",response.percent);

 data.send(response);// Return result to frontend
