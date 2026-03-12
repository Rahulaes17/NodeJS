//Callback function
function greeting(user){
    console.log("Helloooo " + user)
}

function callback(call){
    let userName = "Rahul"
    call(userName);
}

callback(greeting);





//Callbacks in Asynchronous Code
setTimeout(()=>{
    console.log("This is the enddddd............")
},2000)

//OR

const func = () =>{
    console.log("This is not the enddddd.........")
}

setTimeout(func , 1000)


function greet(name, callback) {
    console.log("Hello " + name);

    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Rahul", sayBye);