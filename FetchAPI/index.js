const url = "https://jsonplaceholder.typicode.com/posts/1"

const data = fetch(url)

data.then((value) => {
    return value.json()
}).then((response) => {
    console.log(response)
})


async function getUser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        let user = await response.json();

        console.log("Name:", user.name);
        console.log("Email:", user.email);
        console.log("City:", user.address.city);
    } 
    catch (error) {
        console.log("Error:", error);
    }
}

getUser();