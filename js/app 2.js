const navSlide = () => {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  //animate links
};
navSlide();

document.onmousemove = function (e) {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
};
