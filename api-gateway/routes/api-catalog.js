/*
============================================
; Title:  API-Gateway
; Author: Kevin Jones
; Date: 22 January 2021
; Description: Routing file for gateway project
;===========================================
*/

// API routes
const express = require("express");
const router = express.Router();
const auth_controller = require("../controllers/authController");
const checkToken = require("../check-token");

// POST request for registering a user
router.post("/auth/register", auth_controller.user_register);

// GET request for verifying user tokens
router.get("/auth/token", checkToken, auth_controller.user_token);

// user login requests
router.post("/auth/login", auth_controller.user_login);

// user logout requests
router.get("/auth/logout", auth_controller.user_logout);

module.exports = router;
