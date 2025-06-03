// Simple timed slideshow
        let currentIndex = 0;
        const slides = document.querySelectorAll(".slide");

        function showNextSlide() {
            slides.forEach(slide => slide.classList.remove("active"));
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add("active");
        }

        setInterval(showNextSlide, 4000); // Switch every 4 seconds