var express = require("express");

// --------------
// node sub apps
// --------------

var subapp1 = express();
subapp1.get("/", function(req, res){
  res.json({status: "sub app 1"});
});

var subapp2 = express();
subapp2.get("/", function(req, res){
  res.json({
    name: "subapp",
    id: "2"
  });
});

// main app
// --------

var app = express();

app.use("/subapp2", subapp2);
app.use("/subapp1", subapp1);

// Exports
// -------

module.exports = app;
var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});
