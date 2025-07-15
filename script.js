// Parola Kontrolü
const correctPassword = '1234'; // Parola burada sabit olacak, değiştirilebilir.
function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === correctPassword) {
        document.getElementById('password-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
        startConfetti();
    } else {
        alert('Yanlış parola!');
    }
}

// Konfeti Efekti
function startConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const numberOfConfettiPieces = 100;

    for (let i = 0; i < numberOfConfettiPieces; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = `${Math.random() * 100}vw`;
        confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confettiPiece.style.animationDelay = `${Math.random() * 2}s`;
        
        confettiContainer.appendChild(confettiPiece);
    }
}

window.onload = function() {
    startConfetti();
};

// Senin Hakkında Düşündüklerim Butonunun Tıklama Fonksiyonu
function toggleStory() {
    const storySection = document.getElementById('story-section');
    storySection.classList.toggle('hidden');
}

// Şiir Bölümünü Göster/Gizle
function togglePoem() {
    const poemContent = document.getElementById('poem-content');
    poemContent.classList.toggle('hidden');
}
