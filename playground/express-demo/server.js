const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    // console.log("Method : ", req.method);
    // res.send("<h1>Hello from Express!</h1>");
    res.sendFile(__dirname+"/public/index.html")
})

app.get("/register", (req, res) => {
    console.log("[QUERY]", req.query);
    res.send("Data Received with Thanks!");
})

app.listen(9000, ()=>{
    console.log("Server running on port 9000");
})


// npm i nodemon -g
// nodemon server.js