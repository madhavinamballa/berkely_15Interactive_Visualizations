function init(){
    data=[{
        x: [1,2,3,4,5],
        y:[1,2,3,4,5]
    }];
    Plotly.newPlot("plot",data);

}
function updatePlotly(newx,newy){
    Plotly.restyle("plot","x",[newx]);
    Plotly.restyle("plot","y",[newy]);
}

function getData(dataset){
    var x=[];
    var y=[];
    switch(dataset){
        case "dataset1":
            x = [1, 2, 3, 4, 5];
            y = [0.1, 0.2, 0.3, 0.4, 0.5];
            break;
        
        case "dataset2":
            x = [10, 20, 30, 40, 50];
            y = [1, 10, 100, 1000, 10000];
            break;
        case "dataset3":
            x = [100, 200, 300, 400, 500];
            y = [10, 100, 50, 10, 0];
            break;
    }
    updatePlotly(x,y);
}
init();