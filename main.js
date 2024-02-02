document
  .querySelectorAll(".faq-title")
  .forEach((title) =>
    title.addEventListener("click", (event) =>
      event.target.closest(".faq").classList.toggle("faq-active")
    )
  );

document
  .getElementById("mobile-nav")
  .addEventListener("click", () =>
    document.querySelector("header").classList.toggle("mobile-nav-active")
  );

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
