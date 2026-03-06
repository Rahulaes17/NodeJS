function waitTwoSeconds() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Done waiting");
        }, 2000);
    });
}

console.log("Start");

waitTwoSeconds()
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log("Something went wrong");
    });

console.log("End");



function doTask1(callback) {
    setTimeout(function () {
        console.log("Task 1 done");
        callback("Result 1");
    }, 1000);
}

function doTask2(data, callback) {
    setTimeout(function () {
        console.log("Task 2 done with", data);
        callback("Result 2");
    }, 1000);
}

function doTask3(data, callback) {
    setTimeout(function () {
        console.log("Task 3 done with", data);
        callback("Result 3");
    }, 1000);
}

// Callback Hell
doTask1(function (result1) {
    doTask2(result1, function (result2) {
        doTask3(result2, function (result3) {
            console.log("All tasks done");
        });
    });
});



//promise chaining
function doTask1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Task 1 done");
            resolve("Result 1");
        }, 1000);
    });
}

function doTask2(data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Task 2 done with", data);
            resolve("Result 2");
        }, 1000);
    });
}

function doTask3(data) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Task 3 done with", data);
            resolve("Result 3");
        }, 1000);
    });
}

doTask1()
    .then(function (result1) {
        return doTask2(result1);
    })
    .then(function (result2) {
        return doTask3(result2);
    })
    .then(function (result3) {
        console.log("All tasks done");
    })
    .catch(function (error) {
        console.log("Something failed", error);
    });