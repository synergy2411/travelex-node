const http = require("http");
var server = http.createServer(function(request, response){
    console.log("Method : ", request.method);
    console.log("URL : ", request.url);
    response.write("Hello from Node!");
    response.end();
});

server.listen(3030, () => {
    console.log("Server is up on Port 3030");
})