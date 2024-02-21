const movieList = document.querySelectorAll(".movie-list");

const rightArrows = document.querySelectorAll(".arrow-right");
const leftArrows = document.querySelectorAll(".arrow-left");

rightArrows.forEach((arrow, index) => {
  let clickCounter = 0;
  const widthRatio = Math.floor(window.innerWidth / 300);
  const imageItem = movieList[index].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      movieList[index].style.transform = `translateX(${
        movieList[index].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieList[index].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

leftArrows.forEach((arrow, index) => {
  let clickCounter = 0;
  const imageItem = movieList[index].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) >= 0) {
      movieList[index].style.transform = `translateX(${
        movieList[index].computedStyleMap().get("transform")[0].x.value + 300
      }px)`;
    } else {
      movieList[index].style.transform = "translateX(0)   ";
      clickCounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .navbar, .navbar a, .navbar span, .navbar .bi-caret-down, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select, .movie-list-title"
);

ball.addEventListener("click", function () {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
});
