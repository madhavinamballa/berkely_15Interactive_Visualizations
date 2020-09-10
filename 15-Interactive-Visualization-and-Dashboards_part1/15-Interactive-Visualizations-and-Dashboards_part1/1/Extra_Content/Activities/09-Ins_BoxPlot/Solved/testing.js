// create two arrays ,each of which hold datta
var y0=[];
var y1=[];
for (var i=0;i<50;i++){
    y0.push(Math.random());
    y1.push(Math.random()+1);
}
var trace1={
    y: y0,
    type: "box"
};
var trace2={
    y: y1,
    type: "box"
};
var data=[trace1,trace2];
var layout={
    title: "bASIC BOX PLOT",

};
Plotly.newPlot("plot1",data,layout);
var traceb1={
    y: y0,
    type: "box"
};
var traceb2={
    y: y1,
    type: "box"
};
var datab=[traceb1,traceb2];
Plotly.newPlot("plot2",datab,layout);