import mongoose from "mongoose";

const todoSchema = new mongoose({
        content:{
            type:String,
            required : true,
        },
        complete: {
            type:Boolean,
            default: false
        },
        
    
    },{timestamps : true})

export const Todo = mongoose.model("Todo", todoSchema)