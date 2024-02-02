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
        createdBy: {
            type : mongoose.Schema.Types.ObjectId, // this means we are going to give the reference of any other model
            ref: 'User' // this is the reference of User model 
        },
        subTodos : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "subTodo"
            },
        ]
    
    },{timestamps : true})

export const Todo = mongoose.model("Todo", todoSchema)