const burger = document.querySelector(".meny__btn")
const menu = document.querySelector(".meny__box")

burger.addEventListener ("click", function() {
 menu.classList.toggle ("meny__box-show")
 burger.classList.toggle ("meny__btn-close")
})