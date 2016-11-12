var express=require('express');//returns a function
var bodyParser = require('body-parser');
var app=express();


var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));
app.get("/", function(req, res){
  res.render("index");
});
app.get("/contact", function(req, res){
  res.render("contact",{qs:req.query});
});
app.post("/contact", urlencodedParser, function(req, res){
  console.log(req.body);
  res.render("contact-success",{data: req.body});
});
app.get("/profile/:name", function(req, res){
  var data = {age:29, job: "truck", hobbies:["eating", "fighting"]};
  res.render("profile", {person:req.params.name, data: data});
});
app.listen(3000);
console.log("app is listening on port 3000");
