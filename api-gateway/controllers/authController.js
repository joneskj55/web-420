/*
============================================
; Title:  API-Gateway
; Author: Kevin Jones
; Date: 22 January 2021
; Description: Controller file for gateway project
;===========================================
*/

const User = require("../models/user");

// register new user on POST
exports.user_register = function (req, res) {
  res.send("NOT IMPLEMENTED: User registration POST");
};

// verify token on GET
exports.user_token = function (req, res) {
  res.send("NOT IMPLEMENTED: User token lookup GET");
};
