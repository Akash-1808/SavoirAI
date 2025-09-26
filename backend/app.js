import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import { authRoute } from "./routes/auth.js";
import {userRoute} from "./routes/userRoute.js"


import mongoose from "mongoose"

const app = express();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully!")
    }
    catch(err){
        console.log(err)
    }
}
axios.get("http://localhost:5000", { withCredentials: true });

dotenv.config()
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth",authRoute)
app.use("/api/user", userRoute);




app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running on port "+process.env.PORT)
})