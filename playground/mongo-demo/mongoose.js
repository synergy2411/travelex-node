const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/users_db", { useNewUrlParser: true })
    .then(resp => {
        console.log("Mongo Connected...");

        const Todos = mongoose.model("Todos", {
            label: {
                type: String,
                trim: true,
                required: true
            },
            status: {
                type: Boolean,
                trim: true,
                default: false
            }
        })

        const doc = new Todos({label : "Purchase grocery"});

        doc.save().then(todo => {
            console.log(todo);
        }).catch(err => console.log(err));

    })
    .catch(err => console.log(err));


