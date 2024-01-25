let lis = document.querySelectorAll(".nav-link");

lis.forEach((li) =>
  li.addEventListener("click", function () {
    lis.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
  })
);

let btnScrolledDown = document.querySelector(".scroll-down");
btnScrolledDown.addEventListener("click", function () {
  scrollTo({
    top: 5000,
    behavior: "smooth",
  });
});

let btnScrolledTop = document.querySelector(".btn-top");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 1010.4000244140625) {
    btnScrolledTop.style.opacity = 1;
  } else {
    btnScrolledTop.style.opacity = 0;
  }
});

btnScrolledTop.addEventListener("click", function () {
  scrollTo({
    top: 0,
  });
});
