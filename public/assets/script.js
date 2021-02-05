// IMDb ID to Search
var imdbId = “tt1285016”;

// Send Request
var http = new ActiveXObject(“Microsoft.XMLHTTP”);
http.open(“GET”, “http://www.omdbapi.com/?i=” + imdbId, false);
http.send(null);

// Response to JSON
var omdbData = http.responseText;
var omdbJSON = eval(“(” + omdbData + “)”);

// Returns Movie Title
alert(omdbJSON.Title);