const express=require("express");
const router=express.Router();
const path=require("path");


router.get("/login",(req,res,next)=>{

   res.sendFile(path.join(__dirname,"..","views","login.html"))
   /* localStorage.setItem("username", username);
   console.log("Username:",localStorage.getItem(username)) */
  
})



module.exports=router;