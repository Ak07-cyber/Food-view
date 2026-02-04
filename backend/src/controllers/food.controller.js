const foodModel=require("../models/food.model");
const storageService=require("../services/storage.service")
const {v4:uuid} =require("uuid");

async function createFood(req,res){
    const foodUploadResult=await storageService.uploadFile(req.file.buffer,uuid());

    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:foodUploadResult.url,
        foodPartner:req.foodPartner._id //middleware
    })

    res.status(201).json({
        message:"food item created Successfully",
        food:foodItem
    })
}

async function getFoodItems(req,res){
    const foodItems=await foodModel.find({}); //returns all the food items array
    res.status(200).json({
        message:"Fodd items fetched successfully",
        foodItems
    })
}

module.exports={
    createFood,
    getFoodItems
}