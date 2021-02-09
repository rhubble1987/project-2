
let omdbIds = ["tt3896198","tt2911666","tt0076759","tt1375666","tt0120338"];

let key = "8e4b0c73";

for (let i = 0; i < omdbIds.length; i++) {

    $.ajax({
        method:"GET",
        url: "https://www.omdbapi.com/?i=" + omdbIds[i] + "&plot=short&r=json&" + "apikey=" + key,
        success: function (response) {
            $("#movie-list").append(`<li> 
            <a href="/movie/${response.imdbID}"><h2>${response.Title}</h2></a>
            <img src=${response.Poster}></img> </li>
            `);
        }
    });

}