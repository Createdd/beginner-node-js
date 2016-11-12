/*
var http=require('http');
var fs = require("fs");

var server= http.createServer(function(req, res){
  console.log("request was made"+req.ursl);
  if(req.url==="/home" || req.url==="/"){
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname+"/index.html").pipe(res);
  } else if(req.url==="/contactus"){
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname+"/contact.html").pipe(res);
  } else if(req.url==="/api"){
    var Obj= [{name:"hans", age:30}, {name:"maria", age:18}];
    res.writeHead(200, {"Content-Type":"application/json"});
    res.end(JSON.stringify(Obj));
  } else {
    res.writeHead(404, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname+"/404.html").pipe(res);
  }

});
server.listen(3000,'127.0.0.1');
console.log('Listening to port 3000');/*
