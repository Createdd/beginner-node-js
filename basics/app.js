
//create web application with express



/*
//set up routing with simple node.js
var http=require("http");
var fs=require("fs");
var server = http.createServer(function(req, res){

  if(req.url==="/home" || req.url ==="/"){
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname+"/index.html").pipe(res);
  } else if(req.url==="/contact"){
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname+"/contact.html").pipe(res);
  } else if(req.url==="/myObj"){
    res.writeHead(200, {"Content-Type":"application/json"});
    var myObj={name:"david", job:"busdriver", age:25};
    res.end(JSON.stringify(myObj));
  } else {
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream(__dirname+"/404.html").pipe(res)
  }
});
server.listen(3000, "127.0.0.1");
console.log("listening to port 3000");
*/
/*
//serving JSON
var http=require("http");
var fs=require("fs");
var server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type":"application/json"});
  var myObj={name:"david", job:"busdriver", age:25};
  res.end(JSON.stringify(myObj));
});
server.listen(3000, "127.0.0.1");
console.log("listening to port 3000");
*/
/*
//serving html
var http=require("http");
var fs=require("fs");
var server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type":"text/html"});
  var myReadStream=fs.createReadStream(__dirname+"/index.html");
  myReadStream.pipe(res);
});
server.listen(3000, "127.0.0.1");
console.log("listening to port 3000");
*/
/*
//creating pipes
var http=require("http");
var fs=require("fs");
var server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type":"text/plain"});
  var myReadStream=fs.createReadStream(__dirname+"/readme.txt");
  myReadStream.pipe(res);
});
server.listen(3000, "127.0.0.1");
console.log("listening to port 3000");
*/
/*
//creating a writeable stream
var http=require("http");
var fs=require("fs");
var myReadStream=fs.createReadStream(__dirname+"/readme.txt");
myWriteStream=fs.createWriteStream(__dirname+"/writeMe.txt");
console.log(myReadStream);
myReadStream.on("data", function(chunk){
  console.log("new chunk"+chunk);
  myWriteStream.write(chunk);
});
*/
/*
//create a readable stream
var http=require("http");
var fs=require("fs");
var myReadStream=fs.createReadStream(__dirname+"/readme.txt");
console.log(myReadStream);
myReadStream.on("data", function(chunk){
  console.log("new chunk"+chunk);
});
*/
/*
//set up a server and deal with a request
//ports are a reserved area for a specific programm like node.js for example
var http=require("http");
var server=http.createServer(function(req,res){
  console.log("request was made"+req.url);
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end("Helloo!");
});
server.listen(3000, "127.0.0.1");
console.log("listening on port");
*/
/*
//add and remove directories
var fs = require("fs");
//fs.unlink("writeFile.txt");//to delete
//fs.mkdirSync("stuff");//add directory
//fs.rmdirSync("stuff");//to delete directory
fs.unlink("./stuff/writtenFile");
fs.rmdir("stuff");
*/
/*
//Reading and writing files assynchronously
var fs=require("fs");//load the fs module for file manipulation
var readme = fs.readFile("readme.txt", "utf8", function(err, data){
  fs.writeFile("writeFile.txt", data)
});
*/
/*
//Inherit Eventemitter
var events= require("events");
var util =require("util");//allows objects to inherit something

var Person=function(name){
  this.name=name;
};
util.inherits(Person, events.EventEmitter);//allows the object to have an eventEmitter
//creating different persons
var james= new Person("james");
var mary= new Person("mary");
var mark= new Person("mark");
var people=[james, mary, mark];
//setting an eventlistener for each person in the array
people.forEach(function(person){
  person.on("speak", function(msg){
    console.log(person.name +" said "+msg);
  });
});
james.emit("speak", "hello iam james");
mary.emit("speak", "i am cooking")
*/
/*
var events= require("events");

var myEmitter = new events.EventEmitter();//variable myEmitter is a new Emitter function

myEmitter.on('someEvent', function(msg){
  console.log(msg);
});//the myEmitter fun listens to a certain element

myEmitter.emit("someEvent", "the event was emitted");//let the set emitter emit something
*/
