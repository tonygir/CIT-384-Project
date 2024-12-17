function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {

    const lightbox = document.getElementById('lightbox');
    
    if (lightbox) {
        lightbox.addEventListener('click', function () {
            this.classList.remove('active');
        });
    } else {
        console.log('No lightbox element on this page');
    }
});

function likePhoto(button) {
    button.textContent = button.textContent.includes('Liked') ? 'Like ❤️' : 'Liked ❤️';
}



    document.addEventListener("DOMContentLoaded", () => {
        const heroBackground = document.querySelector(".hero-background");
        const images = [
            "images/Image024.jpg",
            "images/Image025.jpg",
            "images/Image026.jpg",
            "images/Image027.jpg",
            "images/Image028.jpg",
            "images/Image034.jpg",
            "images/Image037.jpg",
            "images/Image030.jpg",
            "images/Image031.jpg",
            "images/Image033.jpg"
        ];
    
        let previousIndex = -1;
    
        function getRandomIndex(exclude) {
            let index;
            do {
                index = Math.floor(Math.random() * images.length);
            } while (index === exclude);
            return index;
        }
    
        function changeHeroImage() {
            heroBackground.classList.remove("fade-in");
            heroBackground.classList.add("fade-out");
    
            setTimeout(() => {
                const randomIndex = getRandomIndex(previousIndex);
                heroBackground.style.backgroundImage = `url(${images[randomIndex]})`;
                previousIndex = randomIndex;
    
                heroBackground.classList.remove("fade-out");
                heroBackground.classList.add("fade-in");
            }, 1000);
        }

    changeHeroImage();

    // Change image every 5 seconds
    setInterval(changeHeroImage, 5000);
});

