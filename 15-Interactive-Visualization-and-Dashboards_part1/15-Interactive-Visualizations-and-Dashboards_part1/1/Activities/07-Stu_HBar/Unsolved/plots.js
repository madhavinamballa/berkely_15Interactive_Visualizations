// @TODO: Complete the following sections

console.log(data);
// Sort the data array using the greekSearchResults value
data.sort(function(a,b) {
   return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
 });
// Slice the first 10 objects for plotting
data = data.slice(0, 10);
data=data.reverse();
console.log(data);
// Trace1 for the Greek Data
var trace1 = {
    x: data.map(row => row.greekSearchResults),
    y: data.map(row => row.greekName),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar",
    orientation: "h"
  };
// set up the data variable
var data = [trace1];
// set up the layout variable
var layout = {
    title: "'Bar' Chart",
    margins: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
    }
  };
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);