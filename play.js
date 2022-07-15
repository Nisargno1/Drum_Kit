const express = require('express');

const app =express();

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

app.use(express.static("Open"));

// app.post("/", function(req, res){
//   res.send("")
// })

app.listen(process.env.PORT || 3010, function(req, res){
  console.log("Server is running on port 3010.");
});
