const os = require("os");
console.log("Total Memory : " + os.totalmem());
console.log("Total Memory : " + os.freemem());
console.log("Arch :  " + os.arch());
console.log("CPU's  :  " + os.cpus().length);

const path = require("path");

const url = "https://www.example.com/public/index.html";

console.log(path.dirname(url));
console.log(path.basename(url));
console.log(path.extname(url));