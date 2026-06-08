const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
let index = 0;
const frame = document.getElementById('photo-frame');
const music = document.getElementById('bg-music');
const overlay = document.getElementById('overlay');

document.body.addEventListener('click', (e) => {
    // Music Start & Hide Overlay
    if(overlay.style.display !== 'none') {
        music.play();
        overlay.style.display = 'none';
        return; // Pehli click bas start ke liye
    }

    // Haptic Feedback
    if (navigator.vibrate) navigator.vibrate(50);

    // Image Cycle
    frame.style.transform = "scale(0.9)";
    setTimeout(() => {
        index = (index + 1) % images.length;
        frame.style.backgroundImage = `url('images/${images[index]}')`;
        frame.style.transform = "scale(1)";
    }, 300);

    // Multiple Hearts
    for(let i=0; i<3; i++) {
        createHeart(e.clientX + (Math.random()*40-20), e.clientY);
    }
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
}
