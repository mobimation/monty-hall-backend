


# Monty Hall Problem

a node package that models the [Monty Hall Problem](https://www.wikiwand.com/en/Monty_Hall_problem) from probability


[![Build Status](https://travis-ci.org/rauljordan/montyhall.js.svg?branch=master)](https://travis-ci.org/rauljordan/montyhall.js)


![Imgur](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Monty_open_door.svg/440px-Monty_open_door.svg.png)

## The Problem

> Suppose you're on a game show, and you're given the choice of three doors: Behind one door is
> a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's
> behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do
> you want to pick door No. 2?" Is it to your advantage to switch your choice?

Taken from the wikipedia article: The Monty Hall problem is a brain teaser, in the form of a probability puzzle (Gruber, Krauss and others), loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall. The problem was originally posed in a letter by Steve Selvin to the American Statistician in 1975 (Selvin 1975a), (Selvin 1975b). It became famous as a question from a reader's letter quoted in Marilyn vos Savant's "Ask Marilyn" column in Parade magazine in 1990 (vos Savant 1990a):


## Installing Monty Hall

```sh
$ npm install montyhall
```

## Methods

```javascript
/**
 * @param numberOfDoors {Integer} - The number of doors you want to simulate
 * @param willSwitch {Boolean} - Whether or not you decide to switch
 * @param numberOfIterations (Integer) - Amount of times you want to simulate it
 */
montyhall.simulateIterations(numberOfDoors, willSwitch, numberOfIterations)
```


```sh
$ var montyhall = require('montyhall')
$ montyhall.simulateIterations(3, true, 100)
$ With 100 iterations and by switching
  With 3 doors

  You succeeded 67 times
  With a success percentage of 67%
```

```javascript
/**
 * @param numberOfDoors {Integer} - The number of doors you want to simulate
 * @param willSwitch {Boolean} - Whether or not you decide to switch
 * @return {Boolean} - Whether or not you succeeded
 */
montyhall.simulate(numberOfDoors, willSwitch)
```

```sh
$ var montyhall = require('montyhall')
$ montyhall.simulate(3, true)
$ true
```

## Development

Want to contribute? Great! Please submit a pull request and I'll review it and integrate it as fast as I can. Write up some tap tests for your implementation before submitting.


License
----

MIT
