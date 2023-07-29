//Create web server

// Start: node comment.js
// Browse: http://localhost:8081
// Stop: Ctrl + c

// Import http module
var http = require("http");

// Import fs module
var fs = require("fs");

// Import url module
var url = require("url");

// Create server
http.createServer(function (request, response) {
    // Parse request url
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    // Read content from file
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, { "Content-Type": "text/html" });
        } else {
            // Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            response.writeHead(200, { "Content-Type": "text/html" });

            // Response file content
            response.write(data.toString());
        }

        // Send response body
        response.end();
    });
}).listen(8081);

// Console will print the message
console.log("Server running at http://localhost:8081/");
