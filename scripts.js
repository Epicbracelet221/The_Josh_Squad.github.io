// Loading Screen Animation
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // Simulate a loading process
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 300);
    }, 3000); // Adjust loading time if needed
});
// Toggle Search Bar Visibility
function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    searchBar.classList.toggle('visible');
}

let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
    currentIndex = index;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// scripts.js
document.querySelectorAll('.course-item').forEach(item => {
    item.addEventListener('click', () => {
        const link = item.querySelector('a');
        if (link) {
            window.location.href = link.href;
        }
    });
});

document.querySelectorAll('.publication-card').forEach(card => {
    card.addEventListener('click', () => {
        // Handle the click event, e.g., open a modal with more details
        alert('Publication clicked: ' + card.querySelector('h3').innerText);
    });
});
