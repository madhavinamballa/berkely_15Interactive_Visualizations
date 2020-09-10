var trace1={
    x:["beer","wine","rum&coke","ice tea","whisky"],
    y:[10,20,30,40,25],
    type:"bar"
};
var trace2={
    x:["beer","wine","rum&coke","ice tea","whisky"],
    y:[10,20,30,40,25],
    type:"line"
};
var trace3={
    labels:["beer","wine","rum&coke","ice tea","whisky"],
    values:[10,20,30,40,25],
    type:"pie"
};
var data=[trace3];
var layout={
    title: "Bar chart",
    //xaxis: {title: "Drinks"},
    //yaxis: {title: "% of Drinks ordered"}
};
Plotly.newPlot("plot",data,layout);

