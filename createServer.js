const http = require("http")

// http.createServer((request, response) => {
//     response.writeHead(200, {
//         'Content-Type' : 'text/html'
//     })
//     response.write("<h2>Hello from Node.js</h2>");
//     response.end()
// }).listen(1000)


//funcyion as a parameter
const sayHello = (request, response) => {
    response.write("Hello from Say Hello func");
    response.end()
}
http.createServer(sayHello).listen(4000)