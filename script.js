const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', jump);

function jump() {
    if (dino.classList != 'jump'){
    dino.classList.add('jump')
    }
    setTimeout(() => {
        dino.classList.remove('jump')
    }, 300)
}

const isAlive = setInterval(() => {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    console.log('cactusLeft', cactusLeft)
    console.log('dinoTop', dinoTop)
    if (cactusLeft < 80 && cactusLeft > 0 && dinoTop >= 106) {
        alert('Loose');
    }
}, 100); 