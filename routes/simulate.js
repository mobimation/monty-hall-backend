var express = require("express");
const simulator = require('./index');

var router = express.Router();
var montyhall = require("montyhall");

/* Each post runs one or more Monty Hall Simulation rounds */
var result = router.get("/", function(req, res, next) {
  // Simulator has three input parameters
  // 1 = number of doors in game
  // 2 = 0=player will not change door. 1=player chooses another door
  // 3 = number of simulation iterations.
  let doors=req.query.ndoors;
  let change=req.query.change;
  let iterations=req.query.iterations;
   let data = simulator.simulateJson(doors, change, iterations);
   res.send(data);// Return result to frontend for display
});
module.exports = router;
