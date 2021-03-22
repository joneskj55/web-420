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

module.exports = mongoose.model("User", userSchema);
