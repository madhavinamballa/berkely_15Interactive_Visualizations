var apiKey = "nt3y7E_9CMtzyKEtx-G7";

var url =
  `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

function unpack(rows,index){
  return rows.map(function(row){
    console.log(row[index]);
    return row[index];
  })
}

function buildPlot(){
  var name=data.dataset.name;
  var stock=data.dataset.dataset_code;
  var start_date=data.dataset.start_date;
  var end_date=data.dataset.end_date;
  var date=(data.dataset.data,0);
  var closingPrices=(data.dataset.data,0);
  var trace1={

  }
  var data=[trace1];
  var layout={
  
  }
  Plotly.newPlot("plot",data,layout)
  

}

  

