const yargs = require("yargs");
const geo = require("./utils/geo");
const forecast = require("./utils/forecast");

const argv = yargs.option({
    address: {
        demand: true,
        type: "string",
        description: "To find the weather",
        alias: 'a'
    }
}).argv;

geo.getPosition(argv.address, (error, {lat, lng, placeName}) => {
    if (error) {
        console.log(error)
    } else {
     forecast.getWeatherData(lat, lng, (error, {summary, temperature})=>{
         if(error){
             console.log(error)
         }else{
             console.log(`Hello! Here in ${placeName}, I predict, it will be ${summary}`);
         }
     })   
    }
})

yargs.parse();