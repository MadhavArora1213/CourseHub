const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
    mobileMenu.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    mobileMenu.classList.remove("scrolled");
  }
});
 
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
