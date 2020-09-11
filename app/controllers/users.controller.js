var User = require('../models/users.model.js');
var mongoose = require('mongoose');
exports.create = function (req, res) {
  if (!req.body.useriId) {
    return res.status(400).send({
      message: "UserID is required "
    });
  }

  var buddy = new User({
    _id: new mongoose.Types.ObjectId(),
    created: req.body.created,
    floor: req.body.floor,
    nonAllocatable: req.body.nonAllocatable,
    selectedSeat: req.body.selectedSeat,
    userDetails: req.body.userDetails,
    userId: req.body.userId,
  });

  User.findOne({useriId: req.body.useriId}, function (err, docs) {
    if (err) throw err;
    else {
      if (docs == null) {
        buddy.save(function (err, data) {
          if (err) {
            res.status(500).send({
              message: "Some error occurred while creating the Note."
            })
          }
          else {
            res.send(data);
          }
        });
      }
      else {
        res.status(302).send({
          message: "User exist in our data base;"
        })
      }
    }
  });

};

exports.findAll = function (req, res) {
  User.find(function (err,data) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while creating the Note."
      })
    }
    else {
      res.send(data);
    }
  })
};

exports.findOne = function (req, res) {
  User.findOne({useriId: req.body.useriId}, function (err, docs) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while creating the Note."
      })
    }
    else {
      res.send(data);
    }
  });
};

exports.update = function (req, res) {

};

exports.delete = function (req, res) {

};
