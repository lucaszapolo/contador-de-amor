// Data do início do namoro - ALTERE AQUI!
const startDate = new Date('2024-05-21T03:00:00'); // Mude para a data real do início do namoro

// Elementos do DOM
const yearsElement = document.getElementById('years');
const monthsElement = document.getElementById('months');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const backgroundMusic = document.getElementById('background-music');

// Função para calcular a diferença de tempo
function calculateTimeDifference() {
    const now = new Date();
    const difference = now - startDate;
    
    if (difference < 0) {
        // Se a data de início é no futuro, mostrar zeros
        return {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    
    // Cálculo de anos
    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    
    // Cálculo de meses (aproximado)
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    
    // Cálculo de dias
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    
    // Cálculo de horas
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    // Cálculo de minutos
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    
    // Cálculo de segundos
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    };
}

// Função para atualizar o contador
function updateCounter() {
    const time = calculateTimeDifference();
    
    // Adicionar animação de contagem
    animateNumber(yearsElement, time.years);
    animateNumber(monthsElement, time.months);
    animateNumber(daysElement, time.days);
    animateNumber(hoursElement, time.hours);
    animateNumber(minutesElement, time.minutes);
    animateNumber(secondsElement, time.seconds);
}

// Função para animar números
function animateNumber(element, targetValue) {
    const currentValue = parseInt(element.textContent);
    if (currentValue !== targetValue) {
        element.style.transform = 'scale(1.2)';
        element.style.color = '#ffeb3b';
        
        setTimeout(() => {
            element.textContent = targetValue;
            element.style.transform = 'scale(1)';
            element.style.color = 'white';
        }, 150);
    }
}

// Função para controlar música
function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.muted = false; // Garantir que não está muted
        backgroundMusic.play();
        playIcon.textContent = '⏸️';
        playPauseBtn.style.background = 'rgba(255, 255, 255, 0.4)';
    } else {
        backgroundMusic.pause();
        playIcon.textContent = '▶️';
        playPauseBtn.style.background = 'rgba(255, 255, 255, 0.2)';
    }
}

// Função para criar corações flutuantes extras
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';
    
    document.querySelector('.hearts-bg').appendChild(heart);
    
    // Remover o coração após a animação
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Event listeners
playPauseBtn.addEventListener('click', toggleMusic);

// Atualizar contador a cada segundo
setInterval(updateCounter, 1000);

// Criar corações flutuantes extras a cada 3 segundos
setInterval(createFloatingHeart, 3000);

// Inicializar contador
updateCounter();

// Função para iniciar música automaticamente
function startMusicAutomatically() {
    // Remover muted para permitir som
    backgroundMusic.muted = false;
    
    // Tentar tocar música automaticamente
    backgroundMusic.play().then(() => {
        playIcon.textContent = '⏸️';
        playPauseBtn.style.background = 'rgba(255, 255, 255, 0.4)';
        console.log('Música iniciada automaticamente!');
    }).catch(error => {
        console.log('Autoplay bloqueado pelo navegador. Clique em qualquer lugar para tocar.');
        // Não mostrar pop-up, apenas log no console
    });
}

// Iniciar música quando a página carregar
window.addEventListener('load', () => {
    setTimeout(startMusicAutomatically, 500); // Delay menor
});

// Tentar autoplay também quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(startMusicAutomatically, 300);
});

// Tentar autoplay quando a página ganhar foco
window.addEventListener('focus', () => {
    if (backgroundMusic.paused) {
        setTimeout(startMusicAutomatically, 100);
    }
});

// Adicionar interação do usuário para permitir autoplay
document.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.muted = false;
        backgroundMusic.play().then(() => {
            playIcon.textContent = '⏸️';
            playPauseBtn.style.background = 'rgba(255, 255, 255, 0.4)';
            console.log('Música iniciada pelo clique!');
        }).catch(error => {
            console.log('Erro ao tocar música:', error);
        });
    }
}, { once: true }); // Executar apenas uma vez



// Função para verificar se a música está disponível
function checkMusicAvailability() {
    backgroundMusic.addEventListener('error', () => {
        console.log('Música não encontrada. Verifique se o arquivo está na pasta do projeto.');
        playPauseBtn.style.display = 'none';
    });
    
    // Verificar se a música carregou corretamente
    backgroundMusic.addEventListener('canplaythrough', () => {
        console.log('Música carregada com sucesso!');
    });
}

// Função para verificar se a foto está disponível
function checkPhotoAvailability() {
    const photo = document.getElementById('couple-photo');
    photo.addEventListener('error', () => {
        console.log('Foto não encontrada. Adicione uma foto chamada "placeholder-photo.jpg" na pasta do projeto.');
        photo.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRkY2QjlEIi8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMDAgMjAwQzEwMCAxNzAgMTMwIDE0MCAxNTAgMTQwQzE3MCAxNDAgMjAwIDE3MCAyMDAgMjAwIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K';
    });
}

// Inicializar verificações
checkMusicAvailability();
checkPhotoAvailability();

// Adicionar efeito de confete quando a página carrega
function createConfetti() {
    const colors = ['#ff6b9d', '#f093fb', '#ffeb3b', '#4caf50', '#2196f3'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.zIndex = '1000';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 100);
    }
}

// Adicionar CSS para animação de confete
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Executar confete quando a página carrega
window.addEventListener('load', () => {
    setTimeout(createConfetti, 1000);
});

// Adicionar efeito de digitação na mensagem
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efeito de digitação na mensagem de amor
window.addEventListener('load', () => {
    const loveMessage = document.querySelector('.love-message');
    const originalText = loveMessage.textContent;
    setTimeout(() => {
        typeWriter(loveMessage, originalText, 80);
    }, 2000);
}); 