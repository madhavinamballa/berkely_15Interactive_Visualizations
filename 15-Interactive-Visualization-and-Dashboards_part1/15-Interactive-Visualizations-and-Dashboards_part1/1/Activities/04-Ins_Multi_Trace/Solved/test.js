
function randomNumbersBetween0and9(n){
    var randomNumberArray=[];
    for (var i=0;i<n;i++){
        randomNumberArray.push(Math.floor(Math.random()*10));
    }
    return randomNumberArray;
}
var trace1={
    x:[1,2,3,4,5],
    y: randomNumbersBetween0and9(6),
    type: "scatter"
};
//create one more trace
var trace2={
    x:[1,2,3,4,5],
    y:randomNumbersBetween0and9(5),
    type: "scatter"
}
var data=[trace1,trace2];
Plotly.newPlot("plot",data);