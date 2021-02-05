const db = require('../models');

module.exports = function(app) {
    app.get("/",function(req,res){

        res.render("index",{});

    });

    app.get("/test", function(req,res){
        res.render("test",{});
    });

    app.get("/movie/:movieId", function(req,res){
        db.ViewParty.findAll({where: {OMDBId: req.params.movieId}}).then(function(data) {
            const hbsObject = {
                OMDBId: req.params.movieId,
                parties: data
            };
            console.log(hbsObject);
            res.render("movieDiscussion",hbsObject);
        }).catch(function(err) {
            const hbsObject = {
                OMDBId: req.params.movieId,
                parties: []
            };
            res.render("movieDiscussion",hbsObject);
        });
    });

    app.get("/view/:viewId",function(req,res){
        db.ViewParty.findAll(req.params.id,{include:Chat}).then(function(data) {
            const hbsObject = {
                party: data
            };
            console.log(data.chatlogs);
            res.render("viewParty",hbsObject);
    });
});

}