var test = require('tape');
var montyHall = require('../');

/**
 * Test that the new JSON output format variant works as expected.
 * Runs a few cases with known output and verifies that the expected
 * Json data is returned.
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
