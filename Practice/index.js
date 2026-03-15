const fs = require("fs");
const http = require("http");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");
console.log("File path:", filePath);

function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

add(5, 10, function(result) {
    console.log("Sum is:", result);
});

fs.writeFile(filePath, "Hello from NodeJS", function(err) {
    if (err) {
        console.log("Error writing file");
    } else {
        console.log("File created successfully");
    }
});

fs.appendFile(filePath, "\nThis line was appended", function(err) {
    if (err) {
        console.log("Append failed");
    } else {
        console.log("Content appended");
    }
});

fs.readFile(filePath, "utf8", function(err, data) {
    if (err) {
        console.log("Error reading file");
    } else {
        console.log("File content:\n", data);
    }
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

const server = http.createServer(function(req, res) {

    console.log(req.method, req.url);

    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.write("Home Page");
    }

    else if (req.url === "/about") {
        res.write("About Page");
    }

    else if (req.url === "/users") {
        res.write("Users Page");
    }

    else {
        res.write("404 Page Not Found");
    }

    res.end();

});

server.listen(3000, function() {
    console.log("Server running at http://localhost:3000");
});



function multiply(a, b) {
    return new Promise((resolve, reject) => {
        let result = a * b;

        if (result) {
            resolve(result);
        } else {
            reject("Error in multiplication");
        }
    });
}

multiply(4, 5)
    .then(result => console.log("Multiply Result:", result))
    .catch(err => console.log(err));



fs.appendFile("sample.txt", "\nAppended text from NodeJS", function (err) {
    if (err) {
        console.log("Error appending file");
    } else {
        console.log("Content appended");
    }
});

const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem());


