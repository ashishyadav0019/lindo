var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// create express app
var app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// // parse requests of content-type - application/json
app.use(bodyParser.json());
app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });

mongoose.connect("mongodb+srv://ashish0019:ashish0019@testcluster-em8sl.mongodb.net/appUsers",
  function (err) {
    if (err){
      console.log('error occured. Exiting Now');
      process.exit();
    }
    console.log("Db connection created. Server is kicking");
  }
);

//A Mongoose Model, when saved, creates a Document in MongoDB with
// The properties as defined by the schema it is derived from.

app.get('/', function(req, res){
  res.json({message: "Server is up and kicking."});
});
require('./app/routes/users.route.js')(app);


app.listen(process.env.PORT || 5050, function () {
  console.log("Server is listening on port ", process.env.PORT, "Env is", app.get('env'));
});
//mongodb+srv://ashish0019:@testcluster-em8sl.mongodb.net/admin
//mongodb://username:p%40ssword@host:port/dbname