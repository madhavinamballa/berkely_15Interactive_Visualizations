var eyeColor=["Brown", "Brown", "Brown", "Brown", "Brown",
"Brown", "Brown", "Brown", "Green", "Green",
"Green", "Green", "Green", "Blue", "Blue",
"Blue", "Blue", "Blue", "Blue"];
var eyeFlicker=[26.8, 27.9, 23.7, 25, 26.3, 24.8,
  25.7, 24.5, 26.4, 24.2, 28, 26.9,
  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];
// create  the trace
var trace1={
  x:eyeColor,
  y:eyeFlicker,
  type:"bar"

};
var data=[trace1];
var layout={
  title:"Eye Color vs Eye Flicker",
  xaxis:{title:"Eye Color"},
  yaxis:{title:"Flicker Frequence"}

};
Plotly.newPlot("bar-plot",data,layout);