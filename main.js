document
  .getElementById("mobile-nav")
  .addEventListener("click", function (_event) {
    document.querySelector("header").classList.toggle("mobile-nav-active");
  });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
