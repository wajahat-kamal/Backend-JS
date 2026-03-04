const button = document.getElementById("greetBtn")
const welcome = document.getElementById("welcome")

button.addEventListener("click", () => {
    welcome.textContent = "Hey, Wajahat! 👋";
})