var mongoose = require('mongoose');
var template = {
  _id: mongoose.Schema.Types.ObjectId,
  userEmail: String,
  userName: String,
  useriId: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now()
  }
};
var userSchema = mongoose.Schema(template);
module.exports = mongoose.model("Users", userSchema);
