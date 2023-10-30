const express = require("express");
const jwt = require("jsonwebtoken");
const userdata = require("../db/users");
const {loginHandler, singupHandler} = require("../controllers/authController");
const loginRouter = express.Router();
const signupRouter=express.Router();

loginRouter.route("/")
    .post (loginHandler);

signupRouter.route("/")
    .post(singupHandler)

module.exports={loginRouter,signupRouter};