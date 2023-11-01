const express = require("express");
const app = express();
const cors = require("cors");
const quizRouter = require("./router/quiz.router");
const dotenv = require("dotenv");

const {loginRouter,signupRouter} = require("./router/auth.router");
const routeNotFound=require("./middleware/routeNotFound");
dotenv.config();
const quizzes = require("./db/quizzes");
const categoriesRouter = require("./router/categories.router");

const port=3000;

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.use("/categories",categoriesRouter);

app.use("/quiz",quizRouter);

app.use("/auth/login",loginRouter);
app.use("/auth/signup",signupRouter);
app.use(routeNotFound);

app.listen(process.env.PORT || port , ()=>{
    console.log("server is running");
})