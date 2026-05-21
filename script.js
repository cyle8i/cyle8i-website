const themeBtn =
document.querySelector(".theme-toggle");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

});

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((reveal) => {

    const windowHeight =
    window.innerHeight;

    const revealTop =
    reveal.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      reveal.classList.add("active");

    }

  });

});
const orderBtn =
document.querySelector(".order-btn");

const orderModal =
document.querySelector(".order-modal");

const closeModal =
document.querySelector(".close-modal");

orderBtn.addEventListener("click", () => {

  orderModal.classList.add("active");

});

closeModal.addEventListener("click", () => {

  orderModal.classList.remove("active");

});
const loader =
document.querySelector(".loader");

window.addEventListener("load", () => {

  setTimeout(() => {

    loader.classList.add("hide");

  }, 1500);

});