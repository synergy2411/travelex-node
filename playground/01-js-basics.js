// var x = "20";

// var y = 10;

// var z = 20;

// console.log(x + y);     // 2010
// console.log(x - y);     // 10
// console.log(x == z);     // true
// console.log(x === z);     // false



// Non-blocking

function longRunningOperation(){
    setTimeout(()=>{
        console.log("Running...")
    }, 3000);
}
function webRequest(req){
    console.log("Starting : ", req.id)
    longRunningOperation();
    console.log("Ending : ", req.id)
}

// webRequest({id : 1})
// webRequest({id : 2})

// console.log(global);
// console.log(process);
// console.log(__dirname);
// console.log(__filename);