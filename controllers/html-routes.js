const db = require('../models');

module.exports = function (app) {
    app.get("/", function (req, res) {

        res.render("index", {});

    });
    app.get("/movie/:movieId", function (req, res) {
        db.ViewParty.findAll({ where: { OMDBId: req.params.movieId } }).then(function (data) {
            const hbsObject = {
                parties: data
            };
            console.log(hbsObject);
            res.render("movieDiscussion", hbsObject);
        }).catch(function (err) {
            const hbsObject = {
                parties: []
            };
            res.render("movieDiscussion", hbsObject);
        });
    });

    app.get("/view/:viewId", function (req, res) {
        db.Chat.findAll({ where: { ViewPartyId: req.params.viewId } }).then(function (data) {
            const hbsObject = {
                chats: data
            };
            console.log(data);
            res.render("viewParty", hbsObject);
        }).catch(function (err) {
            const hbsObject = {
                chats: []
            };
            console.log(data);
            res.render("viewParty", hbsObject);
        });
    });

}