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