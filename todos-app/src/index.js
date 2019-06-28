const express = require("express");
require("./db/mongoose");
const Todos = require("./models/todo.model");
const path = require("path");

const app = express();

//Middleware to Parse json and attaches with req.body
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

app.get("/todos", (req, res) => {
    Todos.find({}).then(todos => {
        return res.status(200).send(todos)
    }).catch(err => {
        return res.status(501).send(err)
    })
})

app.get("/todos/:id", (req, res) => {
    const _id = req.params.id;
    Todos.findById(_id).then(todo => {
        if (!todo) {
            return res.status(404).send();
        } else {
            res.status(201).send(todo);
        }
    }).catch(err => res.status(404).send(err))
})

app.post("/todos", (req, res) => {
    // console.log(req.body);           // undefined

    if (req.body) {
        const todo = new Todos(req.body);
        todo.save().then(resp => {
            return res.status(201).send(resp)
        }).catch(err => res.status(501).send())
    }else{
        res.send("No Data found")
    }
})

app.patch("/todos/:id", (req, res) => {
    if(req.params){
        const _id = req.params.id;

        Todos.findByIdAndUpdate(_id, req.body, (err, resp) =>{
            if(err){
                return res.status(404).send()}
            else{
                return res.status(201).send(resp)
            }
        })

    }else{
        res.send({msg : "No ID Found"})
    }
    
 })

app.delete("/todos/:id", (req, res) => { 
    if(req.params){
        Todos.findOneAndDelete(req.params.id, (err, resp) => {
            if(err){
                return res.status(404).send(err)
            }else{
                return res.status(200).send(resp)
            }
        } )
    }
    res.send({msg : "No ID found"})
    
})


app.listen(3030, () => {
    console.log("Server started at port 3030");
})