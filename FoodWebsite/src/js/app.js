const searchForm = document.querySelector(".search-form");
const cardItemContainer = document.querySelector(".card-items-container");
const navbar = document.querySelector(".navigation-bar");

// ! BUTTONS
const searchBtn = document.querySelector("#search-btn");
const cardBtn = document.querySelector("#shop-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (_) {
    if (
      !_.composedPath().includes(searchBtn) &&
      !_.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

cardBtn.addEventListener("click", function () {
  cardItemContainer.classList.toggle("active");
  document.addEventListener("click", function (_) {
    if (
      !_.composedPath().includes(cardBtn) &&
      !_.composedPath().includes(cardItemContainer)
    ) {
      cardItemContainer.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (_) {
    if (
      !_.composedPath().includes(menuBtn) &&
      !_.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});
