const userModel = require("../models/user.model");
// const { default: bcrypt } = require("bcryptjs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_SECRET;



const registerUser = async (req , res) =>{
    const { name , email , password , role } = req.body;
     console.log(password);
     const hashedPassword = await bcrypt.hash(password , 10);
     console.log(hashedPassword);

     const newUser = await userModel.create({
        name:name,
        email:email,
        password:hashedPassword,
        role:role
     })

     res.status(201).json({
        "message" : "User register successfully",
        "New User":newUser
     });
}


const loginUser = async (req , res)=>{
    const {email , password } = req.body;

    const user = await userModel.findOne({email});
    console.log(user);
    if(!user){
        res.status(404).json("user not found");
    }

    const isMatch = await bcrypt.compare(password , user.password);

    if(!isMatch){
        res.status(401).json({message:"invalid credentials"});
    }

    const token = jwt.sign({id:user._id , role:user.role} , jwt_secret);
    res.cookie('token' , token)
    res.status(200).json({
        message:"login successfully",
        token:token,
        user:user
    });


}


const userProfile = async (req , res)=>{
    const user = await userModel.findById(req.user.id).select("-password");
    console.log("user profile" , user);
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    res.status(200).json(user);
}


module.exports = { registerUser , loginUser , userProfile };

