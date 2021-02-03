module.exports = function(app) {
    app.get("/test", function(req,res){
        res.render("test",{});
    });

    app.get("/movie/:movieId", function(req,res){
        res.render("movieDiscussion",{});
    });

    app.get("/view/:viewId",function(req,res){
        res.render("viewParty",{});
    });
}