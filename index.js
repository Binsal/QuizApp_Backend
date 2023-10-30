const express = require("express");
const app = express();
const cors = require("cors");
const quizzes = require("./db/quizzes");

const port=3000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.get("/quiz",(req,res)=>{
    res.send(quizzes.data);
})

app.listen(process.env.PORT || port , ()=>{
    console.log("server is running");
})