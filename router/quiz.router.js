const express = require("express");
const quizzes = require("../db/quizzes");
const quizRouter = express.Router();
const authVerify = require("../middleware/authverify");


quizRouter.route("/")
    .get(authVerify,(req,res) => {
        res.json(quizzes.data);
    });

module.exports =  quizRouter;