var trace1={
    x:data.organ,
    y:data.survival.map(val=>Math.sqrt(val)),
    type: "box",
    name: "Cancer survival"

};
var data=[trace1];
var layout = {
    title: "Square Root of Cancer Survival by Organ",
    xaxis: { title: "Organ" },
    yaxis: { title: "Square Root of Survival" }
  };
  Plotly.newPlot("plot",data,layout);
  
