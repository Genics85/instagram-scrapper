require("dotenv").config();
const express=require("express");
const app=express();
const PORT=5000||process.env.PORT;

app.use("/images",require("./routes/images"))


app.listen(PORT,(req,res)=>{
  console.log("connected to port 5000");
})