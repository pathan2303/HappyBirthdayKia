const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];
let index = 0;
let revealed = false;
const frame = document.getElementById('photo-frame');
const music = document.getElementById('bg-music');
const overlay = document.getElementById('overlay');
const content = document.getElementById('content');

document.body.addEventListener('click', (e) => {
    // Pehli baar tap: Blast aur Reveal
    if(!revealed) {
        revealed = true;
        music.play();
        overlay.style.display = 'none';
        content.style.filter = 'blur(0)'; // Blur hata do
        heartBlast(); // Heart ka dhamaka
        return;
    }

    // Baad ke taps: Haptic + Image cycle + Single hearts
    if (navigator.vibrate) navigator.vibrate(50);
    
    frame.style.transform = "scale(0.9)";
    setTimeout(() => {
        index = (index + 1) % images.length;
        frame.style.backgroundImage = `url('images/${images[index]}')`;
        frame.style.transform = "scale(1)";
    }, 300);

    createHeart(e.clientX, e.clientY);
});

// ... baaki code wahi rahega, bas heartBlast() function ko replace kar do:

function heartBlast() {
    for(let i=0; i<50; i++) { // 50 hearts for a bigger effect
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        
        // Poori screen par kahin bhi random position
        let randomX = Math.random() * window.innerWidth;
        let randomY = Math.random() * window.innerHeight;
        
        heart.style.left = randomX + 'px';
        heart.style.top = randomY + 'px';
        
        // Animation: Har heart thoda alag speed se udayega
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
