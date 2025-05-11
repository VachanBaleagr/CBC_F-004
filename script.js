document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "user" && password === "1234") {
        window.location.href = "home.html";
      } else {
        document.getElementById("loginMessage").textContent = "Invalid username or password.";
      }
    });
  }
});