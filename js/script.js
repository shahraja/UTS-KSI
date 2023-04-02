// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger di clik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan  humberger
const humberger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
