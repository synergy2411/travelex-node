const request = require("request");

const getPosition = (address, cb) => {
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1Ijoic3luZXJneTI0MTEiLCJhIjoiY2p4NXc0cm53MDZoODQwbHFuNzdzMzV5NCJ9.DKIDo6bcG51yLXf2DmlYcQ";

request(url, (error, response) => {
if (error) {
    cb(error)
} else {
    const body = JSON.parse(response.body);
    cb(null, {
        lat : body.features[0].center[0],
        lng : body.features[0].center[1],
        placeName : body.features[0].place_name
    })
    // console.log("Latitude : " + body.features[0].center[0]);
    // console.log("Longitude : " + body.features[0].center[1]);
    // console.log("Place : " + body.features[0].place_name);
}
})
}

module.exports = { getPosition }