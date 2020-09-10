function init(){
    var data=[{
        values:[10,20,30,78],
        labels:["mago","banana","orange","straw berry"],
        type:"pie"}];
    var layout={
        height: 600,
        width:800
    }
    Plotly.plot("pie",data,layout);
}
function updateplotly(newdata){
    var PIE=document.getElementById("pie");
    Plotly.restyle(PIE,"values",[newdata])

}
function getdata(dataset){
    var data=[];
    switch(dataset){
    case "dataset1":
        data=[1,2,3,4];
        break;
    case 'dataset2':
        data=[10,20,30,40];
        break;
    case 'dataset3':
        data=[100,200,300,23];
        break;
    }
    updateplotly(data);
}
init();