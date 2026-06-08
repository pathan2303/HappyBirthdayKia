const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'];
let index = 0;
let revealed = false;

const frame = document.getElementById('photo-frame');
const music = document.getElementById('bg-music');
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');

// 1. Overlay click handle karega
overlay.addEventListener('click', () => {
    if(!revealed) {
        revealed = true;
        music.play();
        overlay.style.display = 'none'; // Overlay hatao
        content.style.filter = 'blur(0)'; // Blur hatao
        heartBlast(); // Blast karo
    }
});

// 2. Baaki screen ka click (images ke liye)
document.body.addEventListener('click', (e) => {
    if(!revealed) return; // Agar reveal nahi hua toh kuch mat karo

    if (navigator.vibrate) navigator.vibrate(50);
    
    frame.style.transform = "scale(0.9)";
    setTimeout(() => {
        index = (index + 1) % images.length;
        frame.style.backgroundImage = `url('images/${images[index]}')`;
        frame.style.transform = "scale(1)";
    }, 300);

    createHeart(e.clientX, e.clientY);
});

function heartBlast() {
    for(let i=0; i<50; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * window.innerHeight + 'px';
        heart.style.animation = `fly ${Math.random()*2 + 1}s ease-out forwards`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}

function createHeart(x, y) {
    let heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.animation = 'fly 2s ease-out forwards';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
}
