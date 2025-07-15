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

// Hediyeye Yönlendirme
function sendGift() {
    window.location.href = 'https://wa.me/?text=Eda%20Nur%20için%20doğum%20günü%20hediyesi%20önerisi';
}
