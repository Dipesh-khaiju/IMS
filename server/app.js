import express from "express"; 
import  dotenv from "dotenv";

import HandleDataRoutes from "./routes/HandleDataRoutes.js"
import mongoConnect from "./db/conn.js";
const app=express();

dotenv.config();

app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/api/products",HandleDataRoutes)

app.listen(3000,()=>{
  mongoConnect();
  console.log(`Listening on POrt 3000`)
})