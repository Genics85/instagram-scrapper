const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const PORT=5000||process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/images",require("./routes/images"));


app.listen(PORT,(req,res)=>{
  console.log("connected to port 5000");
})