/** add event on multiple elements */

const addEvenOnElement = function (elements, evetType, callback) {
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(evetType, callback);
    }
}

/**navbar toggle for mobile */
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavBar = function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}



