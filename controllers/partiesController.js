const db = require('../models');

module.exports = function(app,io) {

//Loading index page will pull all saved view parties
app.get("/", function(req,res) {
    db.ViewParty.findAll(function(err,data) {
        if (err) {
            throw err;
        }
        const hbsObject = {
            parties: data
        };
        console.log(hbsObject);
        res.render('index',hbsObject);
    });
});


//Finalize the get individual party page route
/* app.get("/party/:id", function(req,res) {
    db.ViewParty.findByPk(req.params.id).then(function(data) {
        const hbsObject = {
            party: data
        };
        console.log(hbsObject)
    }).then(function(db.ViewParty))
})
 */
app.post("/api/parties", function (req,res) {
    let socketId;
    io.on("connection", (socket) => {
        console.log(socket.id);
        socketId = socket.id;
      });
    db.ViewParty.create({
        OMDBId: req.body.OMDBId,
        socketId: socketId,
        viewerNumber: req.body.viewerNumber,
        viewDay: req.body.viewDay,
        viewTime: req.body.viewTime
    }).then(function(err, dbViewParty) {
        if (err) {
            throw err;
        }
        res.json(dbViewParty);
    });
});

app.delete("/api/parties/:id", function(req,res) {
    db.ViewParty.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(err, dbViewParty) {
        if (err) {
            throw err;
        }
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
    }).then(function(err, dbViewParty) {
        if (err) {
            throw err;
        }
        res.json(dbViewParty);
    });
});

}