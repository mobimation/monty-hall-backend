module.exports.simulate = montyHall;

/**
 * Simulates Monty Hall over a given number of iterations
 */
module.exports.simulateIterations = function (numDoors, willSwitch, iterations) {
   var results = [];
   for (var i = 0; i < iterations; i++) {
     results.push(montyHall(numDoors, willSwitch));
   }

   var numSuccesses = results.filter(function (x) {
     return x === true;
   }).length;

   var successProbability = (numSuccesses / iterations) * 100;

   if (willSwitch) {
     console.log('With ' + iterations + ' iterations and by switching');
   }
   else {
     console.log('With ' + iterations + ' and by not switching');
   }
   console.log('With ' + numDoors + ' doors\n');
   console.log('You succeeded ' + numSuccesses + ' times');
   console.log('With a success percentage of ' + successProbability + '%\n');
 };

/**
 * Simulates Monty Hall over a given number of iterations.
 * Returns the result as a JSON string rather than verbal printout.
 */
module.exports.simulateJson = function (numDoors, willSwitch, iterations) {
   var results = [];
   for (var i = 0; i < iterations; i++) {
     results.push(montyHall(numDoors, willSwitch));
   }

   var numSuccesses = results.filter(function (x) {
     return x === true;
   }).length;

   var successProbability = (numSuccesses / iterations) * 100;

   if (willSwitch) {
     console.log('With ' + iterations + ' iterations and by switching');
   }
   else {
     console.log('With ' + iterations + ' and by not switching');
   }
   console.log("Simulation done, now return result as JSON string");

	 let data= {
        doors:   {numDoors},
			wswitch:   {willSwitch},
			iterations:{iterations},
			percentage:{successProbability}
		};
    console.log("MyData=",data);
   return data;
}

 /**
  * Monty Hall Simulator
  * @param numDoors {Integer} Number of doors in simulation
  * @param willSwitch {Boolean} if contestant wants to switch or not
  * @return {Boolean} if contestant won or not
  */
 function montyHall(numDoors, willSwitch) {

   var doors = falseArray(numDoors);
   var winningDoorIndex = getRandomInt(0, numDoors - 1);
   var choiceIndex = getRandomInt(0, numDoors - 1);

   /**
    * Creates a door with the prize in it
    */
   doors[winningDoorIndex] = true;
   var chosen = doors[choiceIndex];

   var unpickedDoors = doors;
   unpickedDoors.splice(choiceIndex, 1);

   /**
   *  Out of those unpicked, the alternative is either:
   *  the prize door, or
   *  an empty door if the initial choice is actually the prize.
   */
   var alternative = (unpickedDoors.indexOf(true) > -1);

   if (willSwitch) {
     return alternative;
   }
   else {
     return chosen;
   }

 }

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * @param min {Integer} inclusive lower limit
 * @param max {Integer} exclusive upper limit
 * @return {Integer} random number
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Creates an array of false booleans given a size of the array
 * @param n {Integer} upper limit of array (inclusive)
 * @return {Array} array of false booleans
 */
function falseArray(n) {
    var foo = [];
    for (var i = 0; i < n; i++) {
        foo.push(false);
    }
    return foo;
}
