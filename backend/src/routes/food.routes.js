const express=require("express");
const foodController=require("../controllers/food.controller");
const authMiddleware=require("../middlewares/auth.middleware");
const router=express.Router();
const multer=require("multer");

const upload=multer({
    storage:multer.memoryStorage(), //stores the file buffer temporaly on the servers ram and and hard disk 
})

//POST method /api/food/ {Protected} //endpoint using which the foodpartner can post the food item to the backend
router.post("/",authMiddleware.authFoodPartnerMiddleware, upload.single("video"),foodController.createFood)

router.get("/",authMiddleware.authUserMiddleware,foodController.getFoodItems);

module.exports=router;