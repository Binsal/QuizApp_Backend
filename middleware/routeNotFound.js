const routeNotFound = (req,res)=>{
    res.status(404).json({message:"Page not Found"})
}

module.exports=routeNotFound;