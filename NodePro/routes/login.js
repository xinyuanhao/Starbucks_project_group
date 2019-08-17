const express = require("express")
const router = express.Router();
const pool = require("../pool");
router.get("/",(req,res)=>{
  var sql = `SELECT uid,start FROM xbk_user where uname=? and upwd=?`;
  
  pool.query(sql,[req.query.uname,req.query.upwd],(err,result)=>{
    if(err) throw err;
    if(result.length==0){
      res.send(result);
    }else{
      req.session.uid=result[0].uid;
      console.log(req.session.uid);
      res.send(result)
    }
  })
})

module.exports = router;