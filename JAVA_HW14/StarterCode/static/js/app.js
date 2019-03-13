// from data.js
var UFOData = data;

var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var getdate = d3.select("#datetime");

  // Get the value property of the input element
  var sDate = getdate.property("value");
  console.log(sDate);

  var filteredData = UFOData.filter(UFO => UFO.datetime === sDate);

 console.log(filteredData);

    // We can use d3 to see the object that dispatched the event
    // Append one cell for each sighting

    var tbody = d3.select("tbody");

    filteredData.forEach(function(site) {
        
        var row = tbody.append("tr");

            Object.entries(site).forEach(function([key, value]) {
            //console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
            });
    });
});