// Parola Kontrolü
const correctPassword = '1234'; // Parola burada sabit olacak, değiştirilebilir.
function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === correctPassword) {
        document.getElementById('password-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
        startCountdown();
        startConfetti();
    } else {
        alert('Yanlış parola!');
    }
}

// Sayaç
function startCountdown() {
    const targetDate = new Date('2025-07-16T00:00:00'); // Doğum gününe özel tarih
    const countdownElement = document.getElementById('countdown');

    setInterval(function() {
        const now = new Date();
        const difference = targetDate - now;
        
        if (difference <= 0) {
            countdownElement.innerHTML = "Doğum Günü Başladı!";
        } else {
            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            countdownElement.innerHTML = `Doğum Gününe ${hours} saat ${minutes} dakika ${seconds} saniye kaldı`;
        }
    }, 1000);
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
