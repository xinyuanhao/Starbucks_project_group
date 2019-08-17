const express=require("express")
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    var obj=req.query;
    var sql = `INSERT INTO starbucks_cart SET ?`;    
    pool.query(sql,[obj],(err,result)=>{
        if(err)throw err;
    })
  })
  
  module.exports = router;