import express from "express";
const router=express.Router()
import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"


//REGISTER
router.post("/register",async(req,res)=>{
    try{
        const {username,email,password}=req.body
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hashSync(password,salt)
        const newUser=new User({username,email,password:hashedPassword})
        const savedUser=await newUser.save()
        res.status(200).json(savedUser)

    }
    catch(err){
        res.status(500).json(err)
    }

})


//LOGIN
router.post("/login",async (req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email})
       
        if(!user){
            return res.status(404).json("User not found!")
        }
        const match=await bcrypt.compare(req.body.password,user.password)
        
        if(!match){
            return res.status(401).json("Wrong credentials!")
        }
        const token=jwt.sign({_id:user._id,username:user.username,email:user.email},process.env.SECRET,{expiresIn:"3d"})
        const {password,...info}=user._doc
        res.cookie("token",token).status(200).json(info)

    }
    catch(err){
        res.status(500).json(err)
    }
})



//LOGOUT
router.get("/logout",async (req,res)=>{
    try{
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User logged out successfully!")

    }
    catch(err){
        res.status(500).json(err)
    }
})

//REFETCH USER
router.get("/refetch", (req,res)=>{
    try {
        const token=req.cookies.token
        console.log("Refetch request - Token present:", !!token);
        
        if (!token) {
            return res.status(401).json({ error: "No token provided" });
        }
        
        jwt.verify(token,process.env.SECRET,{},async (err,data)=>{
            if(err){
                console.log("JWT verification error:", err);
                return res.status(401).json({ error: "Invalid token", details: err.message })
            }
            console.log("JWT verification successful for user:", data.username);
            res.status(200).json(data)
        })
    } catch (error) {
        console.log("Refetch error:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})



export const authRoute= router;