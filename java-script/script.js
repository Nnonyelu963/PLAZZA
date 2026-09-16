let lastScrollTop = 0;
const nav = document.querySelector("header ul");

window.addEventListener("scroll", function () {

    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        nav.classList.add("hide");
    } else {
        nav.classList.remove("hide");
    }

    lastScrollTop = currentScroll;
});