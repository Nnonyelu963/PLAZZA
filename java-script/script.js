let lastscrollTop = 0;
const header = document.querySelector('header');

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastscrollTop) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    lastscrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});