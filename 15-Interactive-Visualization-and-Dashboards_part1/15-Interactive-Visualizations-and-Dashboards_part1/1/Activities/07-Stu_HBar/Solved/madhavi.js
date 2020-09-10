data.sort(function(a, b) {
    return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
  });
  
data=data.slice(0,10);
data=data.reverse();
var trace1={
    x:data.map(row=>row.greekSerachResults),
    y:data.map(row=>row.greekName),
    text: data.map(row => row.greekName),
    type:"bar",
    name:"Greek",
    Orientation: "h"
};
var data=[trace1];
var layout={
    title:"Greek gods search results",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
    }
};
Plotly.newPlot("plot",data,layout);