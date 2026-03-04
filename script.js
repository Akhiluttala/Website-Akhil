AOS.init({
duration:1000
});

/* Scroll progress bar */

window.onscroll = function(){

let winScroll =
document.body.scrollTop ||
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled = (winScroll / height) * 100;

document.getElementById("progress-bar").style.width = scrolled + "%";

};

/* Mobile menu */

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click",()=>{
nav.classList.toggle("active");
});