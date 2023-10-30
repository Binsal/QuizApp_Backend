const express = require("express");
const app = express();
const cors = require("cors");
const quizRouter = require("./router/quiz.router");
const userdata = require("./db/users");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const port=3000;

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.use("/quiz",quizRouter);

app.post("/auth/login",(req,res)=>{
    const {username,password} = req.body;
    const isUserVerfied = userdata.users.some(user=>user.username===username && user.password===password);
    if(isUserVerfied){
        const token  = jwt.sign({id:username},process.env.SECRET_KEY);
        res.json({username,token,message : "user is verfied"});
    }
    else{
        res.status(401).json({message:"Invalid Credentials"})
    }
})

app.listen(process.env.PORT || port , ()=>{
    console.log("server is running");
})