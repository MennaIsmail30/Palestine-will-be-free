const btnNavEl = document.querySelector(".btn-mobile-nav")
const headerEl = document.querySelector(".header");
const bg = document.querySelector(".hero-bg")
btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open")
    bg.classList.toggle("hero-bg")

})

