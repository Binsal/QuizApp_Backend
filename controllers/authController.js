const express = require("express");
const jwt = require("jsonwebtoken");
const userdata = require("../db/users");
const {v4:uuid} =require("uuid");

const signupHandler=(req,res)=>{
    const {username,password}=req.body;

    const isUserPresent = userdata.users.some(user=>user.username===username);
    if(isUserPresent){
        res.status(422).json({message:"User Alread Exists"})
    }
    else{
        const id =uuid();
        const newUser = {id,username,password};
        userdata.users=[...userdata.users,newUser];
        const token = jwt.sign({id:username},process.env.SECRET_KEY);
        res.json({message:`Success - Created new user --> ${username}::${token}`})

    }
}

const loginHandler=(req,res)=>{

        const {username,password} = req.body;
        const isUserVerfied = userdata.users.some(user=>user.username===username && user.password===password);
        if(isUserVerfied){
            const token  = jwt.sign({id:username},process.env.SECRET_KEY)
            res.json({username,token,message : "user is verfied"})
        }
        else{
            res.status(401).json({message:"Invalid Credentials"})
        }
    }

module.exports={loginHandler,signupHandler};
