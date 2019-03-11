// from data.js
var UFOData = data;

var filter = d3.select("#filter-btn");

filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var getdate = d3.select("#datetime");

  // Get the value property of the input element
  var sdate = getdate.property("value");

  var filteredData = UFOData.filter(UFOData => UFOData.datetime === sDate);

    // We can use d3 to see the object that dispatched the event
    // Append one cell for each sighting
    var tbody = d3.select("tbody");


    data.forEach(function(filteredData) {
        console.log(filteredData);
        var row = tbody.append("tr");

            Object.entries(filteredData).forEach(function([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
            });
    });
});