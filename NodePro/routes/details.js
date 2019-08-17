const express=require("express")
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    var did=req.query.did;
    var output={product:{}};
    var sql = `SELECT * FROM starbucks_details WHERE did=?`;    
    pool.query(sql,[did],(err,result)=>{
        if (err){
            res.send({code:0});
        }else{
            output.product=result[0];
            res.send(output);
        }
    })
  })
  
  module.exports = router;