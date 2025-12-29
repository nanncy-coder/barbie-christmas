// Neve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.fontSize = (10 + Math.random() * 20) + 'px';
    snowflake.style.animationDuration = (5 + Math.random() * 10) + 's';
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 15000);
}

// Christmas Magic
document.getElementById('magic-btn').addEventListener('click', () => {
    document.getElementById('christmas-music').play();
    setInterval(createSnowflake, 300);
    const santaHeader = document.getElementById('santa-header');
    santaHeader.style.display = 'block';
    santaHeader.style.animation = 'none';
    void santaHeader.offsetWidth;
    santaHeader.style.animation = 'santa-fly 5s linear forwards';
});

// Go Ahead - estrela gigante
document.getElementById('go-ahead-btn').addEventListener('click', () => {
    const star = document.getElementById('star-animation');
    star.style.display = 'block';
    star.style.animation = 'none';
    void star.offsetWidth;
    star.style.animation = 'star-move 3s linear forwards';
    document.getElementById('wish-message').style.display = 'block';
});

// Estrelinhas seguindo o mouse
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
function createMouseStar() {
    const star = document.createElement('div');
    star.textContent = '✨';
    star.style.position = 'fixed';
    star.style.left = mouseX + 'px';
    star.style.top = mouseY + 'px';
    star.style.fontSize = (10 + Math.random() * 15) + 'px';
    star.style.color = '#ff69b4';
    star.style.pointerEvents = 'none';
    star.style.zIndex = 2000;
    star.style.opacity = 1;
    document.body.appendChild(star);
    let posX = mouseX;
    let posY = mouseY;
    function animate() {
        posY -= 1;
        star.style.top = posY + 'px';
        posX += (Math.random() - 0.5) * 2;
        star.style.left = posX + 'px';
        star.style.opacity -= 0.02;
        if (star.style.opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            star.remove();
        }
    }
    animate();
}
document.addEventListener('mousemove', () => {
    createMouseStar();
});

// Função para abrir e fechar as caixinhas
function openBox(box) {
    box.classList.toggle('open');
}