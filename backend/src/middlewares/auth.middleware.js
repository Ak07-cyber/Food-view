const jwt=require("jsonwebtoken");
const foodPartnerModel=require("../models/foodpartner.model");
const userModel = require("../models/user.model");

async function authFoodPartnerMiddleware(req,res,next){
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"please Login First"
        })
    }
    
    try{
        //if the below line fails it throws an error and hence would be catched by the catch block 
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const foodPartner=await foodPartnerModel.findById(decoded.id);

        req.foodPartner=foodPartner;

        next();
    }catch(error){
        return res.status(401).json({
            message:"Invalid Token"
        })
    }

}

async function authUserMiddleware(req,res,next) {
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Please login first"
        })
    }
    
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        const user=await userModel.findById(decoded.id);

        req.user=user;
        
        next();
    }catch(error){
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}

module.exports={
    authFoodPartnerMiddleware,
    authUserMiddleware
}