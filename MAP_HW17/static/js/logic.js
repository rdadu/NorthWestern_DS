//Level 1: Basic Visualization
//Step 1 - Get the JSON Data for EarthQuakes

function createMap(earthquakeLocs) {
  // Create the tile layer that will be the background of our map
  var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Light Map": lightmap
  };

  // Create an overlayMaps object to hold the earthquakeLocs layer
  var overlayMaps = {
    "earthquake Locations": earthquakeLocs
  };

  // Create the map object with options
  var map = L.map("map-id", {
    center: [54.5260, -105.2551],
    zoom: 12,
    layers: [lightmap, earthquakeLocs]
  });

  // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

function createMarkers(response) {

  // Pull the "locations" property off of response.data
  var locations = response.data.locations;

  // Initialize an array to hold earthquake markers
  var eqMarkers = [];

  // Loop through the stations array
  for (var index = 0; index < locations.length; index++) {
    var location = locations[index];

    // For each report, create a marker and bind a popup with the earthquake's location name

    var eqMarker = L.marker([geometry.coordinates])
      .bindPopup("<h3>" + features.properties.place  + "<h3><h3>Magitude: " + features.properties.mag + "<h3>");

    // Add the marker to the bikeMarkers array
    eqMarkers.push(eqMarker);
  }

  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(eqMarkers));
}


// Perform an API call to the earthquake API to get reportable activity information. Call createMarkers when complete
//d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json", createMarkers);



d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", createMarkers);


