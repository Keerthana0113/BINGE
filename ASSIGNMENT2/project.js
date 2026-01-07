document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const loginForm = document.querySelector(".form-box.login form");
    const registerForm = document.querySelector(".form-box.register form");
    const btnPopup = document.querySelector(".btnLogin-popup");
    const iconClose = document.querySelector(".icon-close");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");

    
    btnPopup.addEventListener("click", () => {
        wrapper.classList.add("active-popup");
    });

    iconClose.addEventListener("click", () => {
        wrapper.classList.remove("active-popup");
    });

    
    registerLink.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.add("active");
    });

    
    loginLink.addEventListener("click", (e) => {
        e.preventDefault();
        wrapper.classList.remove("active");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Login Successful!");
        wrapper.classList.remove("active-popup");
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Registration Successful!");
        wrapper.classList.remove("active-popup"); 
    });
});

