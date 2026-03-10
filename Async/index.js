const func1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Three seconds....")
        }, 3000);
    })
}


const main = async () => {
    console.log("Hey I am this")
    const promise1 = await func1()
    console.log(promise1)
    // promise1.then((v)=>{
    //     console.log(v)
    // })

    console.log("Hey program finished!")
}

main()


function getUser() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("User data received");
        }, 2000);
    });
}

async function displayUser() {
    console.log("Loading user...");

    let result = await getUser();

    console.log(result);
    console.log("Task finished");
}

displayUser();