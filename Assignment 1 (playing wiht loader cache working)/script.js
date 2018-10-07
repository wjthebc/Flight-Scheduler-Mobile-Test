var x = 1;
//fetches from web server for chrome and stores in var
fetch('./db.json')
//converts from JSON string to JSON object
.then(response => response.json()).then(products => {

//sets empty var for HTML to be stored in
var cities = [];

//maps through products, sets var html to "arrivingFrom: VALUE<br/><br/>arrivalTime: VALUE"
var arrCities = products.map(function(city){

  var html =  "<div class= 'panel panel-default'> <div class =panel-body>From " + city["name"] + " to DC<br/>" + city["arrival_time"] + "<span style=float:right>" + city["status"] + "</span></div></div>" ;
//pushes var html into var citties, which is global scope
    cities.push(html);
});

//sets var p to result ID in HTML
var p = document.querySelector("#result")
//passes var citites into var p and replaces comma normally separating array items with a space
p.innerHTML = cities.join(" ");
})


//registers service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

//sets global var
var myVar;
//sets timeout of 1 second for body to load
function myFunction() {
    myVar = setTimeout(showPage, 1000);
}
;

//loads page content and removes loader
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
