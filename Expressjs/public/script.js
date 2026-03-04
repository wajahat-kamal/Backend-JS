const button = document.getElementsByClassName("greetBtn")
const welcome = document.getElementsByClassName("welcome")

button.addEventListener("click", () => {
    welcome.textContent = "Hi, Wajahat Kamal"
})