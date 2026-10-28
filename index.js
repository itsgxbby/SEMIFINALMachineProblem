const form = document.getElementById("loginForm");
const welcomeMSG = document.getElementById("welcomeMSG");

form.addEventListener("submit", function (event) { 
    event.preventDefault();

    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "entry.html";
    } else {
        welcomeMSG.textContent = "Incorrect username or password.";
        welcomeMSG.className = "error";
    }
})
