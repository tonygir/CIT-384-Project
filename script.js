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

document.addEventListener('DOMContentLoaded', function() {

const randomPhotoBtn = document.getElementById('randomPhotoBtn');
const randomPhotoContainer = document.getElementById('randomPhotoContainer');

if (randomPhotoBtn) {
    randomPhotoBtn.addEventListener('click', displayRandomPhoto);
} else {
    console.error('Button with id="randomPhotoBtn" not found');
}

let lastImageIndex = null;

function displayRandomPhoto() {

const imageList = [
    'Image024.jpg', 
    'Image025.jpg', 
    'Image026.jpg', 
    'Image027.jpg',
    'Image028.jpg',
];

    let randomIndex;
        
    do {
        randomIndex = Math.floor(Math.random() * imageList.length);
    } while (randomIndex === lastImageIndex);
    
    const randomImage = imageList[randomIndex];
    
    const imgElement = document.createElement('img');
    
    randomPhotoContainer.innerHTML = '';
    
    randomPhotoContainer.appendChild(imgElement);
    imgElement.src = `images/${randomImage}`;
    imgElement.style.maxWidth = '20%';
    imgElement.style.borderRadius = '10px';

    lastImageIndex = randomIndex;
}
});
