function openGift() {
    document.querySelector('.gift-box').style.display = 'none';
    document.querySelector('.dino').style.display = 'block';
    document.querySelector('.chat-bubble').style.display = 'block';
    releaseBalloons();
}

function releaseBalloons() {
    const balloonContainer = document.querySelector('.balloons');
    const colors = ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee'];
    
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloonContainer.appendChild(balloon);
    }
}

function showMessage() {
    document.querySelector('.message').style.display = 'block';
}
