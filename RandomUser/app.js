document.getElementById("btn").addEventListener("click", fetchRandomUser)
const Button = document.getElementById("btn")
Button.innerHTML = "Generate User"

async function fetchRandomUser() {
    Button.innerHTML = "Loading..."
    try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
            throw new Error(`Http error:${response.status}`)
        }
        const data = await response.json()
        Button.innerHTML = "Generate Random User Again"
        displayUser(data?.results[0])
    } catch (error) {
        throw new Error(`Error is ${error}`)
    }
}

function displayUser(data) {
    const userContainer = document.getElementById("user_container")
    userContainer.innerHTML = renderUserDetailsUI(data)
}

const renderUserDetailsUI = (data) => `<div>
    <p>Name : ${data?.name?.first} </p>
    <p>Gender : ${data?.gender}</p>
    <div></div>`