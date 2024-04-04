const mongoose= require("mongoose")
const user= mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required:true
    },
    contactNo:{
        type:Number,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    cnic:{
        type:Number,
        required: true
    },
    gender:{
        type:String,
        required: true
    },
    dob:{
        type:String,
        required: true
    },
    matricInstit:{
        type:String,
        required: true
    },
    matricPercentage:{
        type:String,
        required: true
    },
    matricYear:{
        type:Number,
        required: true
    },
    matricBoard:{
        type:String,
        required: true
    },
    interInstit:{
        type:String,
        required: true
    },
    interMarks:{
        type:Number,
        required: true
    },
    interPercentage:{
        type:String,
        required: true
    },
    interYear:{
        type:Number,
        required: true
    },
    interBoard:{
        type:String,
        required: true
    },
    skills:{
        type:String,
        required: true
    },

})

const User= mongoose.model("User", user)
module.exports= User
// const City= mongoose.model("City", city)
// module.exports=City