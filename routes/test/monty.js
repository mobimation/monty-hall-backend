var test = require('tape');
var montyHall = require('../');

/**
 * Tests that with 3 doors, if contestant decides to
 * switch, that the probability of winning will be over 60%
 * by running monty over 100 times and storing the results
 * in an array
 */
test('over 66% winning probability with switch and 3 doors', function (t) {

    var results = [];
    var iterations = 10000;
    for (var i = 0; i < iterations; i++) {
      results.push(montyHall.simulate(3, true));
    }

    // Number of times you succeed by switching
    var numSuccesses = results.filter(function (x) {
      return x === true;
    }).length;

    // It should be greater than 66%
    var successProbability = (numSuccesses / iterations) * 100;

    t.equal(successProbability > 66, true);

    montyHall.simulateIterations(3, true, 100);
    t.end();
});
