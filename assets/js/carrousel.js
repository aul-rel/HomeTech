let currentSlide = 0;
const slides = document.querySelectorAll('.comment-box');
const totalSlides = slides.length;

function moveToNextSlide() {
    // Atualiza o índice do slide atual
    currentSlide = (currentSlide + 1) % totalSlides; // Ciclano entre os slides
    updateCarousel();
}

// Atualiza a posição do carrossel
function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const offset = -currentSlide * 100; // Move a largura de um slide
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Mover para o próximo slide a cada 5 segundos
setInterval(moveToNextSlide, 5000); // 5000 milissegundos = 5 segundos

// Inicializa a primeira atualização do carrossel
updateCarousel();
