function init() {
  var data = [{
    values: [19, 26, 55, 88],
    labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
  // YOUR CODE HERE
  // Use `Plotly.restyle` to update the pie chart with the newdata array
  var PIE = document.getElementById("pie");

  // Note the extra brackets around 'newx' and 'newy'
  Plotly.restyle( PIE,"values",[newdata]);
  
}

function getData(dataset) {
  // YOUR CODE HERE
  // create a select statement to select different data arrays (YOUR CHOICE)
  // whenever the dataset parameter changes. This function will get called
  // from the dropdown event handler.
  var data = [];
  // Fill the x and y arrays as a function of the selected dataset
  switch (dataset) {
  case "dataset1":
    data = [1,2,3,39];
    break;
  case "dataset2":
    data = [10,20,30,37];
    break;
  case "dataset3":
    data = [19,26,55,88];
    break;
  }
  updatePlotly(data);
}

init();
