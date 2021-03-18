/*
============================================
; Title:  API-Gateway
; Author: Kevin Jones
; Date: 17 January 2021
; Description: config.js file for gateway project
;===========================================
*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || "3000";

module.exports = config;
