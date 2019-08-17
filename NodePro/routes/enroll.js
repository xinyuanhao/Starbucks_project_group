const express = require("express")
const router = express.Router();
const pool = require("../pool");
router.get("/", (req, res) => {
    //console.log(req.session.uid+"2")
    var sql = `SELECT uid FROM xbk_user where uname=?`;
    pool.query(sql, [req.query.uname], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
});
router.post("/", (req, res) => {
    var sql = "INSERT INTO xbk_user (uname,upwd,email,phone) VALUES (?,?,?,?)";
    //console.log(req);
    pool.query(sql, [req.body.uname, req.body.upwd, req.body.email, req.body.phone], (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})


module.exports = router;