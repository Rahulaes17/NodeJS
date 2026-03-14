// import modules
const fs = require("fs");
const http = require("http");


// 1. Callback example
function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

add(5, 10, function (result) {
    console.log("Sum is:", result);
});


// 2. File System (write file)
fs.writeFile("sample.txt", "Hello from NodeJS", function (err) {
    if (err) {
        console.log("Error writing file");
    } else {
        console.log("File created successfully");
    }
});


// 3. File System (read file)
fs.readFile("sample.txt", "utf8", function (err, data) {
    if (err) {
        console.log("Error reading file");
    } else {
        console.log("File content:", data);
    }
});


// 4. Async/Await with API
async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await response.json();

        console.log("First User:", users[0].name);
    } catch (error) {
        console.log("API Error:", error);
    }
}

getUsers();


// 5. HTTP Server
const server = http.createServer(function (req, res) {

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello from Node Server");
    res.end();

});

server.listen(3000, function () {
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


