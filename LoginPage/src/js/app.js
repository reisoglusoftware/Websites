const wrapper = document.querySelector(".wrapper");

const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

const login = document.querySelector(".login");
const closeLogin = document.querySelector(".icon-close");

function showLoginPage() {
  if (wrapper.classList.contains("active")) {
    wrapper.classList.remove("active");
  }
}

login.addEventListener("click", (event) => {
  wrapper.classList.add("active-popup");
  showLoginPage();
  event.stopPropagation();
});

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", showLoginPage);

closeLogin.addEventListener("click", (event) => {
  wrapper.classList.remove("active-popup");
  event.stopPropagation();
});

// Add event listener to the document to close the popup when clicking outside of it
document.addEventListener("click", (event) => {
  if (!event.target.closest(".wrapper")) {
    // Check if the clicked element is not a child of the wrapper
    wrapper.classList.remove("active-popup");
  }
});
