// get all the image slides.
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.carousel-slides');
const totalSlides = slides.length;
let currentSlide = 0;

const dotsContainer = document.querySelector('.carousel-dots');
// function to create the dots dynamically using material-symbols-outlined.
function createDots () {
    // Check if dots are already created to avoid duplicates.
    if (dotsContainer.children.length === 0) {
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('material-symbols-outlined');
            dot.textContent = 'circle';
            dot.setAttribute('data-slide', index);
            dotsContainer.appendChild(dot);
        });
    }
}
// update active dot.
function updateDots() {
    const dots = document.querySelectorAll('.carousel-dots .material-symbols-outlined');
    dots.forEach((dot, index) => {
        //dot.textContent = index === currentSlide ? 'radio_button_checked' : 'circle';
        if (index === currentSlide) {
            dot.classList.add('filled'); // Add filled class to the active dot
        } else {
            dot.classList.remove('filled'); // Remove it from others
        }
});
}
// Function to show slides
function showSlide(slideIndex) {
    slides.forEach(slide => slide.classList.remove('active'));       
    currentSlide = (slideIndex + totalSlides) % totalSlides;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    slides[currentSlide].classList.add('active');
    updateDots();
}
// Add click event to dots for navigation
dotsContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('material-symbols-outlined')) {
        const slideToGo = parseInt(event.target.getAttribute('data-slide'));
        showSlide(slideToGo);
    }
});

//add event listener to next and back buttons to control the images.
document.getElementById('next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
    resetAutoSlide();
});

document.getElementById('back').addEventListener('click', () => {
    showSlide(currentSlide - 1);
    resetAutoSlide();
});
// set the slides to change every 5 seconds.
let autoSlide = setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
// reset the timer on user interactions.
function resetAutoSlide () {
    clearInterval(autoSlide); // stop the existing interval.
    autoSlide = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // restart it.
}
// Ensure first slide is shown right away
document.addEventListener('DOMContentLoaded', () => {
    createDots();
    updateDots();
    showSlide(currentSlide);
});
//call the function
createDots();
updateDots();
showSlide(currentSlide);