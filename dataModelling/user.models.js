import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    // {
    //     username:String,
    //     email:String,
    //     isActive:Boolean,
    // },

    // alternate and professional method 
        
        {
            username : {
                type:String,
                required:true,
                unique:true,
                lowercase:true
            },
            email : {
                type:String,
                required:true,
                unique:true,
                lowercase:true
            },
            password : {
                type:String,
                // require:true, 
                required:[true , "password is required"]
            },

        },{timestamps : true}
    )
// timestamps : ture it's define two field (createdBy, updatedBy) automatically

export const User = mongoose.model("User", userSchema)