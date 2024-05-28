const hambuger = document.querySelector(".hamburger");
const header_navlist = document.querySelector(".header-nav-list");

hambuger.addEventListener("click", () => {
  hambuger.classList.toggle("active");
  header_navlist.classList.toggle("active");
});

document.querySelectorAll(".header-nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hambuger.classList.remove("active");
    header_navlist.classList.remove("active");
  }),
);
