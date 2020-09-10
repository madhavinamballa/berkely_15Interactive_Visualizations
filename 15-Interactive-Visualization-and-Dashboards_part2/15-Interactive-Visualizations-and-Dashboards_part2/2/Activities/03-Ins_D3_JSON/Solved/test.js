const url="https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(function(data){
    console.log(data);
});
console.log("will this print first?");
const 