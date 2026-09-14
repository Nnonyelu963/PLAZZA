let lastscrollTop = 0;
const menu = document.querySelector('header ul');

window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;
    if (currentScroll > lastscrollTop && currentScroll > 50) {
        menu.classList.add('hide');
    } else {
        menu.classList.remove('hide');
    }
    lastscrollTop = currentScroll; // For Mobile or negative scrolling
});