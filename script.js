const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'];
let index = 0;
let revealed = false;

const frame = document.getElementById('photo-frame');
const music = document.getElementById('bg-music');
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');

overlay.addEventListener('click', () => {
    if(!revealed) {
        revealed = true;
        music.play();
        overlay.style.display = 'none';
        content.style.filter = 'blur(0)';
        burst(window.innerWidth/2, window.innerHeight/2, 50);
    }
});

document.body.addEventListener('click', (e) => {
    if(!revealed) return;
    if (navigator.vibrate) navigator.vibrate(50);
    
    frame.style.transform = "scale(0.9) rotate(-5deg)";
    setTimeout(() => {
        index = (index + 1) % images.length;
        frame.style.backgroundImage = `url('images/${images[index]}')`;
        frame.style.transform = "scale(1) rotate(0deg)";
        triggerBackgroundHearts();
    }, 300);

    burst(e.clientX, e.clientY, 20);
});

function burst(x, y, count) {
    for(let i=0; i<count; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.animation = `fly ${Math.random()*1.5 + 0.5}s ease-out forwards`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}

function triggerBackgroundHearts() {
    for(let i=0; i<8; i++) {
        let h = document.createElement('div');
        h.className = 'heart';
        h.innerHTML = '❤️';
        h.style.left = (frame.offsetLeft + Math.random()*250) + 'px';
        h.style.top = (frame.offsetTop + Math.random()*250) + 'px';
        h.style.animation = 'fade 1s ease-out forwards';
        document.body.appendChild(h);
        setTimeout(() => h.remove(), 1000);
    }
}
