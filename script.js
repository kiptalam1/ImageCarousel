// get all the image slides.
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentSlide = 0;

// Function to show slides
function showSlide(slideIndex) {
    slides.forEach(slide => slide.classList.remove('active'));       
    currentSlide = (slideIndex + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}
//add event listener to next and back buttons to control the images.
document.getElementById('next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.getElementById('back').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

//call the function
showSlide(currentSlide);