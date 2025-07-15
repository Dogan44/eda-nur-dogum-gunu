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
    particlesJS('confetti', {
        particles: {
            number: {
                value: 150
            },
            shape: {
                type: ['circle', 'triangle', 'polygon']
            },
            size: {
                value: 5
            },
            move: {
                speed: 3
            }
        }
    });
}

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
