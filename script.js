const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
let index = 0;
const frame = document.getElementById('photo-frame');
const music = document.getElementById('bg-music');
const overlay = document.getElementById('overlay');

document.body.addEventListener('click', (e) => {
    // 1. Start music and remove overlay
    if(overlay.style.display !== 'none') {
        music.play();
        overlay.style.display = 'none';
        return;
    }

    // 2. Haptic Feedback
    if (navigator.vibrate) navigator.vibrate(50);

    // 3. Image Cycle
    frame.style.transform = "scale(0.85) rotate(5deg)";
    setTimeout(() => {
        index = (index + 1) % images.length;
        frame.style.backgroundImage = `url('images/${images[index]}')`;
        frame.style.transform = "scale(1) rotate(0deg)";
    }, 300);

    // 4. Create Hearts
    for(let i=0; i<3; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = (e.clientX + Math.random()*50-25) + 'px';
        heart.style.top = e.clientY + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
});
