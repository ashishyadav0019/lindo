var mongoose = require('mongoose');
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
module.exports = mongoose.model("Users", userSchema);
