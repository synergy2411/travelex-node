const mongoose = require("mongoose");

const Todos = mongoose.model("Todos", {
    label : {
        type : String,
        required : true,
        trim : true
    },
    status : {
        type : Boolean,
        default : false,
        trim : true
    }
})

module.exports = Todos;