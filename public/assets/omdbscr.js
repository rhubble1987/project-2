var totalCalls = 15000;
    var calls = 0;
    data.forEach(function (d, i) {
    OMDbApi(I, d.IdIMDb); //posterCall
}

function OMDbApi(index, id) {
    $.ajax({
        url:"http://www.omdbapi.com/?i="+id+"&plot=short&r=json",
        crossDomain: true,
        dataType: "jsonp",
                    dataObj : index,
        success: function (response) {
            window.data[this.dataObj].Poster = response.poster;
                            calls++;
                            if (calls == totalCalls)
                            {
                               alert("We're done");
                            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            error = 1;
        } 
    });
}