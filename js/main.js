let lis = document.querySelectorAll(".nav-link");

lis.forEach((li) =>
  li.addEventListener("click", function () {
    lis.forEach((li) => li.classList.remove("active"));
    li.classList.add("active");
  })
);

let btnScrolled = document.querySelector(".scroll-down");

btnScrolled.addEventListener("click", function () {
  scrollTo({
    top: 5000,
    behavior: "smooth",
  });
});
