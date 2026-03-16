const fs = require("fs");
const http = require("http");
const path = require("path");
const os = require("os");
const EventEmitter = require("events");

console.log("Directory:", __dirname);
console.log("File:", __filename);

const filePath = path.join(__dirname, "sample.txt");

function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

add(5, 10, function(result) {
    console.log("Sum is:", result);
});

fs.writeFile(filePath, "Hello from NodeJS", function(err) {
    if (err) return console.log("Error writing file");

    console.log("File created");

    fs.appendFile(filePath, "\nThis line was appended", function(err) {
        if (err) return console.log("Append failed");

        console.log("Content appended");

        fs.readFile(filePath, "utf8", function(err, data) {
            if (err) return console.log("Error reading file");

            console.log("File content:\n", data);
        });
    });
});

console.log("Command line arguments:", process.argv);

async function getUsers() {
    try {
        console.log("Fetching users...");

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const users = await response.json();

        console.log("First user:", users[0].name);

    } catch (error) {
        console.log("API Error:", error);
    }
}

getUsers();

function multiply(a, b) {
    return new Promise((resolve, reject) => {
        let result = a * b;
        resolve(result);
    });
}

multiply(4, 5)
.then(result => console.log("Multiply Result:", result))
.catch(err => console.log(err));

const emitter = new EventEmitter();

emitter.on("greet", function(name) {
    console.log("Hello", name);
});

emitter.emit("greet", "Rahul");

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

setInterval(() => {
    console.log("Running interval task");
}, 5000);

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());

const server = http.createServer(function(req, res) {

    console.log(req.method, req.url);

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    }

    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("About Page");
    }

    else if (req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json" });

        const users = [
            { name: "Rahul", age: 20 },
            { name: "Rohit", age: 22 }
        ];

        res.end(JSON.stringify(users));
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }

});

server.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});
