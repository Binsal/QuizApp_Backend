const express = require("express");
const app = express();
const cors = require("cors");
const quizzes = require("./db/quizzes");
const quizRouter = require("./router/quiz.router");

const port=3000;

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.use("/quiz",quizRouter);

app.listen(process.env.PORT || port , ()=>{
    console.log("server is running");
})