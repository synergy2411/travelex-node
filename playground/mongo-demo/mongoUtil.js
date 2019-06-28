
const mongodb = require("mongodb");

const client = mongodb.MongoClient;

const id = new mongodb.ObjectID("5d15ba839084cc704b6b8003");

client.connect("mongodb://127.0.0.1:27017",
    { useNewUrlParser: true },
    (err, conn) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log("Mongo connected!");

        const _db = conn.db("users_db");


        //UPDATE
        // _db.collection("users").updateOne({ "name" : "Foo" }
        //     , { $set: { age : 35 } }, function(err, result) {
        //         if(err) console.log(err)
        //         console.log("[UPDATED]", result)
        //     })

        //DELETE
        // _db.collection("users").deleteOne({"age" : 32}, (err, result) => {
        //     if(err) console.log(err);
        //     console.log("[DELETED]", result);
        // })

        //FIND
        // _db.collection("users").find({"_id" : id }).toArray((err, docs) => {
        //     if(err) console.log(err)
        //     console.log("[FOUND]", docs);
        // })

        //CREATE
        // _db.collection("users").insert({ "name": "Bam", "age": 32 },
        //     (err, result) => {
        //         if(err) console.log(err);
        //         console.log("[INSERTED]", result);
        //     })
    })