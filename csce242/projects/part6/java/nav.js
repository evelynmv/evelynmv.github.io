//toggle nav
document.getElementById("hamburger").onclick = () => {
  document.getElementById("main-nav").classList.toggle("active");
};

//Big Image Side Show
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000); // every 4 seconds
