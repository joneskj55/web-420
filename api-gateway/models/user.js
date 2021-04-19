/*
============================================
; Title:  User Model
; Author: Professor Krasso
; Date:   22 March 2021
; Modified by: Kevin Jones
; Description: This is our user model.
;===========================================
*/

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const User = (module.exports = mongoose.model("User", userSchema));

// add new user to db
module.exports.add = (user, callback) => {
  user.save(callback);
};

// get user by id
module.exports.getById = (id, callback) => {
  var query = { _id: id };
  User.findById(query, callback);
};

// find user by email
module.exports.getOne = (e, callback) => {
  var query = { email: e };
  User.findOne(query, callback);
};
