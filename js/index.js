const burger = document?.querySelector("[data-burger]");
const nav = document?.querySelector("[data-nav]");
const body = document.body;
const navitems = nav?.querySelectorAll('a');
const header = document?.querySelector(".header");
const headerheight = header?.offsetHeight;
document.querySelector(":root").style.setProperty('--header-height', `$(headerHeight)px`);
burger?.addEventListener("click", () => {
    body.classList.toggle('stop-scroll')
    burger?.classList.toggle("burger--active");
    nav.classList.toggle('nav--visible');
});
navitems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        nav?.classList.remove('nav--visible');
    });
});