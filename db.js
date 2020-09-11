var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ashish0019:ashish0019@testcluster-em8sl.mongodb.net/appUsers", function (err, db) {
    if (err) throw err;
    console.log("all set");
  }
);

var template = {
  _id: mongoose.Schema.Types.ObjectId,
  floor: Number,
  nonAllocatable: Array,
  selectedSeat: Object,
  userDetails: Object,
  userId: String,
  created: {
    type: Date,
    default: Date.now()
  }
};
var userSchema = mongoose.Schema(template);
var User = mongoose.model("Users", userSchema);
//A Mongoose Model, when saved, creates a Document in MongoDB with
// The properties as defined by the schema it is derived from.

var demoUser = new User({
  _id: new mongoose.Types.ObjectId(),
  useriId: "X2",
  userName: "demo",
  userEmail: "demo@123.com"




});

