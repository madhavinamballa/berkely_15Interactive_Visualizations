var trace1={
    x: data.year,
    y: data.long_jump,
    type: "scatter",
    name: "long jump",
    mode: "markers",
    marker: {
        color: "blue",
        symbol: "hexagram"
    }

};
var trace2={
    x: data.year,
    y: data.high_jump,
    type: "scatter",
    name: "high jump",
    mode: "markers",
    marker: {
        color: "orange",
        symbol: "diamond-x"
    }

};
var trace3={
    x: data.year,
    y: data.discus_throw,
    type: "scatter",
    name: "discus throw",
    mode: "markers",
    marker: {
        color: "pink",
        symbol: "cross"
    }

};
var data=[trace1,trace2,trace3];
var layout={
    title: "Olympics terends",
    xais: { title: "year"},
    yaxis: {title: "Olympic Event"  }
};
Plotly.newPlot("plot",data,layout);