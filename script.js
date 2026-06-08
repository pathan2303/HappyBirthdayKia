const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
let index = 0;
const frame = document.getElementById('photo-frame');
const music = document.getElementById('bg-music');

document.body.addEventListener('click', (e) => {
    // Music play
    music.play();

    // Image Change with fade
    frame.style.opacity = 0;
    setTimeout(() => {
        index = (index + 1) % images.length;
        frame.style.backgroundImage = `url('images/${images[index]}')`;
        frame.style.opacity = 1;
    }, 500);

    // Create Heart
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    document.body.appendChild(heart);

    // Cleanup heart
    setTimeout(() => heart.remove(), 2000);
});
