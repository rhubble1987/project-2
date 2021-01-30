const db = require('../models');

module.exports = function(app) {

app.get("/api/parties", function(req,res) {
    db.ViewParty.findAll(function(data) {
        const hbsObject = {
            parties: data
        };
        console.log(hbsObject);
        //res.render('index',hbsObject);
        res.json(hbsObject);
    });
});

app.post("/api/parties", function (req,res) {
    db.ViewParty.create({
        OMDBId: req.body.OMDBId,
        viewerNumber: req.body.viewerNumber,
        viewDay: req.body.viewDay,
        viewTime: req.body.viewTime
    }).then(function(dbViewParty) {
        res.json(dbViewParty);
    });
});

app.delete("/api/parties/:id", function(req,res) {
    db.ViewParty.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbViewParty) {
        res.json(dbViewParty);
    });
});

app.put("/api/parties/:id", function (req,res) {
    db.ViewParty.update({
        viewerNumber: req.body.viewerNumber,
        viewDay: req.body.viewDay,
        viewTime: req.body.viewTime
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbViewParty) {
        res.json(dbViewParty);
    });
});

}