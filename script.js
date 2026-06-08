const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
let index = 0;
const frame = document.getElementById('photo-frame');
const music = document.getElementById('bg-music');

document.body.addEventListener('click', () => {
    // Image Changer
    frame.style.backgroundImage = `url('images/${images[index]}')`;
    frame.style.backgroundSize = 'cover';
    index = (index + 1) % images.length;
    
    // Play Music
    music.play();
    
    // Heart Animation on Tap
    let heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'heart';
    heart.style.left = event.clientX + 'px';
    heart.style.top = event.clientY + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
});
