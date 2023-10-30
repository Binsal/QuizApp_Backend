const jwt=require("jsonwebtoken");


const authVerify = (req,res,next)=>{
    const token = req.headers.authorization;
    try{
        const decodedToken = jwt.verify(token,process.env.SECRET_KEY);
        req.user = {userId : decodedToken.id}
        return next();
    }
    catch(err){
        console.log(`error from server ${JSON.stringify(err)}`);

    }
}

module.exports=authVerify;