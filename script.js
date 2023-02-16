const btnBurguer = document.querySelector("#menu-buguer-open");
const menuWrapper = document.querySelector("#mobile-menu-wrapper");

function mobileMenu() {
  btnBurguer.classList.toggle("mobile-menu");
  menuWrapper.classList.toggle("none");

  console.log("sss");
}
