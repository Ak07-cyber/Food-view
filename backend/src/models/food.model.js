const mongoose=require("mongoose");

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{//we will store the url of the video file and video will be stored in a cloud service 
        type:String,
        require:true
    },
    description:{
        type:String
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodpartner"
    }
});

const foodModel=mongoose.model("food",foodSchema);

module.exports=foodModel;