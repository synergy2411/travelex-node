const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStartegy = require("passport-local").Strategy;
const session = require("express-session");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(session({secret : "Secret_Key", resave : true, saveUninitialized : true}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

passport.serializeUser((user, done)=>{
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

passport.use(new LocalStartegy((username, password, done) => {
    let user = {username, password};

    //Apply your logic here

    done(null, user);
}))

app.post("/login", passport.authenticate('local', 
    {failureRedirect : "/", successRedirect : "/profile"}))

app.get("/profile", (req, res)=>{
    res.send({message : "success"})
})

app.listen(3030, ()=>{
    console.log("Started at 3030");
})

// surveymonkey.com/r/LJBG2YY -> feedback
// surveymonkey.com/r/LJQLBMM -> Test

// synergy2411@outlook.com