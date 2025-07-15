// Konfeti Efekti
function startConfetti() {
    const confettiContainer = document.getElementById('particles-js');
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

// Hikaye ve Şiir Bölümleri
function toggleStory() {
    const storySection = document.getElementById('story-section');
    storySection.classList.toggle('hidden');
}

function togglePoem() {
    const poemContent = document.getElementById('poem-content');
    poemContent.classList.toggle('hidden');
}

window.onload = function() {
    startConfetti();
};
