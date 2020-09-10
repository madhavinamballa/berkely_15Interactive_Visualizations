/**
 * Generates an array of random numbers between 0 and 9
 * @param {integer} n: length of array to generate
 */
function randomNumbersBetween0and9(n) {
  var randomNumberArray = [];
  for (var i = 0; i < n; i++) {
    randomNumberArray.push(Math.floor(Math.random() * 10));
    //math.random() returns random number between 0 (inclusive) and 1(exclusive)
    //math.floor(45.59) returns number less than 45.59 that means 45
    //if n=5 we need generate 5 numbers between 0 and 9
    //
  }
  return randomNumberArray;
}
//function tocreate random numbers between 23 and 54
function randomNumbersBetween23and54(n) {
  var randomNumberArray = [];
  var max=54;
  var min=23;
  var scale=54-23+1;
  for (var i = 0; i < n; i++) {
    randomNumberArray.push(Math.floor(min+Math.random(scale) * 10));
  }
  return randomNumberArray;
}
// Create our first trace
var trace1 = {
  x: [1, 2, 3, 4, 5],
  y: randomNumbersBetween0and9(5),
  type: "scatter"
};

// Create our second trace
var trace2 = {
  x: [1, 2, 3, 4, 5],
  y: randomNumbersBetween0and9(5),
  type: "scatter"
};

// The data array consists of both traces
var data = [trace1, trace2];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);
