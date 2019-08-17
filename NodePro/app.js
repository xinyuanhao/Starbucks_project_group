//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const session = require("express-session");
/*引入路由模块*/
const index=require("./routes/index");
const login=require("./routes/login")
const enroll=require("./routes/enroll")
const products = require("./routes/products");
const details = require("./routes/details");
const insertCart = require("./routes/insertCart");


const cors=require("cors");
var app = express();
//2.3:session
app.use(session({
  secret: "128位字符串",
  resave: true,
  saveUninitialized: true
}))
app.listen(3000);
app.use(cors(
  "*"
//   // origin: ["http://127.0.0.1:5500",
//   //   "http://localhost:5500"
//   // ],
//   // credentials: true
))
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('../public'));
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/login", login);
app.use("/enroll", enroll);
app.use("/products", products);
app.use("/details", details);
app.use("/insertCart", insertCart);



