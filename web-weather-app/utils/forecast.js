const request = require("request");

const getWeatherData = (lat, lng, cb) => {

    const url = `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`;

    request(url, (error, response) => {
        if (error) {
            cb(error)
        } else {
            const body = JSON.parse(response.body);
            cb(null, {
                summary: body.daily.summary,
                temperature: body.currently.temperature
            })
            // console.log("Summary : " + body.daily.summary);
            // console.log("Temperature : " + body.currently.temperature);
        }
    })
}

module.exports = { getWeatherData }