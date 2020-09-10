// YOUR CODE HERE
var trace1 = {
    x: data.year,
    y: data.long_jump,
    mode: 'lines',
    name: "Long Jump",
    type: "scatter",
    marker: {
        color: "#2077b4"
        symbol: "hexagram"
    }  
  };
  var trace2 = {
    x: data.year,
    y: data.high_jump,
    mode: 'lines',
    name: "High Jump",
    type: "scatter",
    marker: {
        color: "orange"
        symbol: "diamond-x"
    }  
  };
  var trace3 = {
    x: data.year,
    y: data.discuss_throw,
    mode: 'lines',
    name: "discuss_throw",
    type: "scatter",
    marker: {
        color: "rgba(156,165,196,1.0)"
        symbol: "cross"
    }  
  };
  var data=[trace1,trace2,trace3];
  var layout={
      titlke: "Olypics trends",
      xaxis: {title: "year"},
      yaxis: {title: "Olympioc event"}
  };
  Plotly.newPlot("plot", data, layout);
