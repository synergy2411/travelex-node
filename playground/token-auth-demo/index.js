const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();


app.get("/api", (req, res)=>{
    res.send({
        message : "API Route"
    })
})

app.get("/login", (req, res)=>{
    let user = {username : "foo", "password" : "test123"};
    const token = jwt.sign(user, "My_super_secret_key");
    console.log(token);
    res.send({
        message : "Login Route",
        token
    })
})

function authenticate(req, res, next){
    let token = null;
    const bearerToken = req.headers['authorization'];
    console.log(bearerToken);
    if(bearerToken != undefined){
        const bearers = bearerToken.split(" ");
        token = bearers[1];
        req.token = token;
        next();
    }else{
        res.send({error : "No token found"})
    }
}

app.get("/api/protected", authenticate,  (req, res)=>{

    const user = jwt.verify(req.token, "My_super_secret_key");
    if(user){
        return res.send({
            message : "Protected Route"
        })
    }else{
        return res.send({message : "Invalid Token"})
    }
    
})

app.listen(3030, () => {
    console.log("Started at 3030...")
})

