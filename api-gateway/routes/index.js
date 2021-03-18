/*
============================================
; Title:  API-Gateway
; Author: Kevin Jones
; Date: 17 January 2021
; Description: index.js file for gateway project
;===========================================
*/

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
