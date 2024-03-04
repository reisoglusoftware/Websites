const wrapper = document.querySelector(".wrapper");

const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

const login = document.querySelector(".login");
const closeLogin = document.querySelector(".icon-close");

login.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

closeLogin.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
