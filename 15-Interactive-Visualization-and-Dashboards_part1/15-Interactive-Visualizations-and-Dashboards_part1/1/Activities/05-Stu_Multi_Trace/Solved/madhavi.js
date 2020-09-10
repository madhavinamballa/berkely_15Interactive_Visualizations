var trace1={
    x:data.map(row => row.pair),
    y:data.map(row => row.greekSearchResults),
    type:"bar",
    name:"greek"

};
var trace2={
    x:data.map(row => row.pair),
    y:data.map(row => row.romanSearchResults),
    type:"bar",
    name:"roman"
};
var data=[trace1,trace2];
var layout={
    title:"Greek vs Roman gods search results",
    //barmode:"group"

};
Plotly.newPlot("plot", data, layout);
