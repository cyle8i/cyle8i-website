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

const serviceCards = document.querySelectorAll(".hero-service-card");
const serviceModal = document.querySelector(".service-modal");
const closeServiceModal = document.querySelector(".close-service-modal");
const serviceTitle = document.getElementById("serviceTitle");
const serviceContent = document.getElementById("serviceContent");

const serviceData = {
  premium: {
    title: "premium subscriptions",
    content: `
      <ul>
        <li>premium streaming access</li>
        <li>creative & editing tools</li>
        <li>working tools & productivity</li>
        <li>fast & reliable process</li>
      </ul>
      <div class="service-price">start from 5k</div>
    `
  },

  discord: {
    title: "discord solutions",
    content: `
      <ul>
        <li>nitro promotion</li>
        <li>server boost</li>
        <li>aged discord account</li>
        <li>profile decoration & effect</li>
      </ul>
      <div class="service-price">start from 25k</div>
    `
  },

  setup: {
    title: "creative setup services",
    content: `
      <ul>
        <li>aesthetic server layout</li>
        <li>roles, channels, rules setup</li>
        <li>ticket and bot configuration</li>
        <li>professional setup</li>
      </ul>
      <div class="service-price">start from 25k</div>
    `
  }
};
if(serviceModal){
  document.body.appendChild(serviceModal);
}

serviceCards.forEach((card) => {
  card.addEventListener("click", () => {
    const service = card.dataset.service;

    serviceTitle.innerHTML = serviceData[service].title;
    serviceContent.innerHTML = serviceData[service].content;

    serviceModal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});

closeServiceModal.addEventListener("click", () => {
  serviceModal.classList.remove("active");

  document.body.style.overflow = "auto";
});