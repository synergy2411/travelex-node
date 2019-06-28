const express = require("express");
const geo = require("./utils/geo");
const forecast = require("./utils/forecast");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/weather", (req, res) => {
    if (req.query) {
        // const address = req.query.address;
        const { address } = req.query;
        geo.getPosition(address, (err, { lat, lng, placeName }) => {
            if (err) {
                return res.status(404).send(err)
            } else {
                forecast.getWeatherData(lat, lng, (err, { temperature, summary }) => {
                    if (err) {
                        return res.status(404).send(err)
                    } else {
                        return res.status(200).send({ temperature, summary, placeName });
                    }
                })
            }
        })
    } else {
        res.status(404).send({ msg: "Not Found" })
    }
})

app.listen(3030, () => {
    console.log("Server started at port 3030");
})