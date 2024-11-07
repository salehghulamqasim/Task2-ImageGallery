const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pauseBtn = document.querySelector('.pause-btn');

let slideIndex = 0;
let isPaused = false;
let slideShow;

// Function to show the current slide
const showSlide = () => {
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
};

// Function to move to the next slide
const nextSlide = () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
};

// Function to start the slideshow
const startSlideShow = () => {
    slideShow = setInterval(nextSlide, 3000); // Adjust interval as needed
    isPaused = false;
    pauseBtn.textContent = "||"; // Set pause icon
};

// Function to stop the slideshow
const stopSlideShow = () => {
    clearInterval(slideShow);
    isPaused = true;
    pauseBtn.textContent = "▶"; // Set play icon
};

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide();
    stopSlideShow(); // Pause auto-slide when manually navigating
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide();
    stopSlideShow(); // Pause auto-slide when manually navigating
});

// Event listener for play/pause button
pauseBtn.addEventListener('click', () => {
    if (isPaused) {
        startSlideShow();
    } else {
        stopSlideShow();
    }
});

// Pause slideshow only when hovering over the slider images, not the buttons
slider.addEventListener('mouseover', () => {
    if (!isPaused) {
        stopSlideShow();
    }
});

slider.addEventListener('mouseout', () => {
    if (!isPaused) {
        startSlideShow();
    }
});

// Start the slideshow initially
startSlideShow();
