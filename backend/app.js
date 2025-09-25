import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./src/routes/authRoutes.js";
import mongoose from mongoose;



const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected successfully!")
    }
    catch(err){
        console.log(err)
    }
}

dotenv.config()
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/candidates", candidateRoutes);
app.use("/api/auth", authRoutes);



app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("app is running on port "+process.env.PORT)
})