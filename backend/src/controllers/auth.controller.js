//this file will handle all the authorization endpoint for both the user and Food Partner

const userModel=require('../models/user.model.js');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const foodPartnerModel = require('../models/foodpartner.model.js');
const { json } = require('express');

async function registerUser(req,res){

    try{
        const {fullName,email,password}=req.body;

        //determining whether the user already exists though it being unique in the model
        const isUserAlreadyExists=await userModel.findOne({
            email
        })
        if(isUserAlreadyExists){//user already exists
            return res.status(400).json({
                message:"User already exists"
            })
        }

        //hashing the password
        const hashedPassword=await bcrypt.hash(password,10);

        const user=await userModel.create({
            fullName,
            email,
            password:hashedPassword
        })

        //generating the cookie token in the register user itself
        const token=jwt.sign({
            id:user._id
        },process.env.JWT_SECRET);

        res.cookie("token",token)

        res.status(200).json({
            message:"User registered Successfully",
            user:{
                _id:user._id,
                email:user.email,
                fullName:user.fullName
            }
        }) 

    }catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            error:error.meesage
        })
    }

}

async function loginUser(req,res){
    try{
        const {email,password}=req.body;

        //checking if the user even exists in the db
        const user=await userModel.findOne({
            email
        })

        if(!user){
            return res.status(400).json({
                message:"No user exists pls Register"
            })
        }

        const isPasswordValid=await bcrypt.compare(password,user.password);

        if(!isPasswordValid){
            return res.status(400).json({
                message:"Invalid email or Password"
            })
        }

        const token=jwt.sign({
            id:user._id
        },"dasfa")

        res.cookie("token",token)

        res.status(200).json({
            message:"User registered Successfully",
            user:{
                _id:user._id,
                email:user.email,
                fullName:user.fullName
            }
        })

    }catch(error){
        res.status(500),json({
            message:"Internal Server Error",
            error:error.message
        })
        console.log(`error occured &{error.message}`)
    }
}

function logoutUser(req,res){
    res.clearCookie("token");
    res.status(200).json({
        message:"user Logout Successfully"
    });
}

async function registerFoodPartner(req,res) {
    
    try{
        const {name,email,password}=req.body;

        //checking if the email is already registered in the DB;
        const isAccountAlreadyExists= await foodPartnerModel.findOne({
            email
        })

        if(isAccountAlreadyExists){//email is registered in the db
            return res.status(400).json({
                message:"Food Partner account already Exists"
            })
        }

        const hashedPassword=await bcrypt.hash(password,10);

        const foodPartner=await foodPartnerModel.create({
            name,
            email,
            password:hashedPassword
        })

        //generating a cookie token for the user
        const token=jwt.sign({
            id:foodPartner._id
        },process.env.JWT_SECRET);

        res.cookie("token",token);

        res.status(201).json({
            message:"Food partner registered Successfully",
            foodPartner:{
                _id:foodPartner._id,
                email:foodPartner.email,
                name:foodPartner.name
            }
        })

    }catch(error){
        res.status(500).json({
            message:"Internal Server error",
            error:error.message
        })
    }
}


async function loginFoodPartner(req,res) {
    
    try{
        const {email,password}=req.body;

        //checking if the foodpartner is registered or not
        const foodPartner=await foodPartnerModel.findOne({
            email
        });

        if(!foodPartner){
            return res.status(400).json({
                message:"Email not registered please register"
            })
        }

        const isPasswordValid=await bcrypt.compare(password,foodPartner.password);

        if(!isPasswordValid){//invalid password
            return res.status(400).json({
                message:"invalid email or password"
            })
        }

        //generating a token and sending them to foodpartner in the cookies
        const token=jwt.sign({
            id:foodPartner._id
        },process.env.JWT_SECRET);

        res.cookie("toekn",token);

        res.status(200).json({
            message:"Food Partner logged in Successfully",
            foodPartner:{
                id:foodPartner._id,
                email:foodPartner.email,
                name:foodPartner.name
            }
        })

    }catch(error){
        res.status(500).json({
            message:"Internal Server error",
            error:error.message
        })
    }
}

function logoutFoodPartner(req,res){
    res.clearCookie("token");
    res.status(201).json({
        message:"user Logout Successfully"
    })
}

module.exports={
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}
