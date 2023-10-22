import mongoose from "mongoose";
const venderSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    }
    ,
    password:{
        type:String,
        required:true
    }
    ,
    activated:{
        type:Boolean,
        required:true
    }
});
const Vender = mongoose.model("Vender",venderSchema)
export default Vender;