document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    toggleButton.addEventListener("click", () => {
        menu.classList.toggle("is-active");
    });
});

// Dropdown menu functionality
const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownToggle.nextElementSibling.classList.toggle("is-active");
});


// slideshow functionality
const slides = document.querySelectorAll(".slideshow img");
let current = 0;

setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
}, 4000);

// Drinks filter functionality
document.addEventListener("DOMContentLoaded", () => {
    const coffeeMain = document.querySelector(".coffee-main");
    const drinkMain = document.querySelector(".drink-main");

    const coffeeBtn = document.getElementById("coffeeBtn");
    const drinkBtn = document.getElementById("drinkBtn");

    // Default state
    coffeeMain.style.display = "block";
    drinkMain.style.display = "none";
    coffeeBtn.classList.add("active");

    coffeeBtn.addEventListener("click", () => {
        coffeeMain.style.display = "block";
        drinkMain.style.display = "none";

        coffeeBtn.classList.add("active");
        drinkBtn.classList.remove("active");
    });

    drinkBtn.addEventListener("click", () => {
        coffeeMain.style.display = "none";
        drinkMain.style.display = "block";

        drinkBtn.classList.add("active");
        coffeeBtn.classList.remove("active");
    });
});

// Food filter functionality
document.addEventListener("DOMContentLoaded", () => {
    const breakfastMain = document.querySelector(".breakfast-main");
    const lunchMain = document.querySelector(".lunch-main");

    const breakfastBtn = document.getElementById("breakfastBtn");
    const lunchBtn = document.getElementById("lunchBtn");

    // Default state
    breakfastMain.style.display = "block";
    lunchMain.style.display = "none";
    breakfastBtn.classList.add("active");

    breakfastBtn.addEventListener("click", () => {
        breakfastMain.style.display = "block";
        lunchMain.style.display = "none";

        breakfastBtn.classList.add("active");
        lunchBtn.classList.remove("active");
    } );

    lunchBtn.addEventListener("click", () => {
        breakfastMain.style.display = "none";
        lunchMain.style.display = "block";

        lunchBtn.classList.add("active");
        breakfastBtn.classList.remove("active");
    });
});



