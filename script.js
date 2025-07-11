// Konfeti efekti
function createConfetti() {
    const confetti = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        let confettiPiece = document.createElement('div');
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.width = '10px';
        confettiPiece.style.height = '10px';
        confettiPiece.style.animation = 'falling 3s infinite';
        confetti.appendChild(confettiPiece);
    }
}

function getRandomColor() {
    const colors = ['#ff6347', '#ff69b4', '#00bfff', '#32cd32', '#ffa500'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Doğum günü şarkısını çal
document.getElementById('birthday-song').play();

// Hediyeye yönlendirme
function sendGift() {
    window.location.href = 'https://wa.me/?text=Eda%20Nur%20için%20doğum%20günü%20hediyesi%20önerisi';
}

// Konfeti başlat
window.onload = function() {
    createConfetti();
};
