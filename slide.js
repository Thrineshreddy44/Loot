// Hero Section

let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

slidesContainer.appendChild(slides[0].cloneNode(true)); 

function showSlides() {
    slideIndex++;
    const slideWidth = slidesContainer.clientWidth; 
    slidesContainer.style.transition = 'transform 1s ease-in-out';
    slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`; 

    if (slideIndex === totalSlides) {
        setTimeout(() => {
            slidesContainer.style.transition = 'none'; 
            slidesContainer.style.transform = 'translateX(0)'; 
            slideIndex = 0;
        }, 1000); 
    }
}

setInterval(showSlides, 4000); 

// HS End
