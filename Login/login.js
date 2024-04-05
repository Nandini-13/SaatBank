const log_in_btn = document.querySelector("#log-in-btn");
const register_btn = document.querySelector("#register-btn");
const container = document.querySelector(".container");

const log_in_btn2 = document.querySelector("#log-in-btn2");
const register_btn2 = document.querySelector("#register-btn2");

register_btn.addEventListener("click", ()=>{
    container.classList.add("register-mode");
});

log_in_btn.addEventListener("click", ()=>{
    container.classList.remove("register-mode");
});

register_btn2.addEventListener("click", ()=>{
    container.classList.add("register-mode2");
});

log_in_btn2.addEventListener("click", ()=>{
    container.classList.remove("register-mode2");
});