// Generate Floating Particles
for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = ${Math.random() * 12 + 8}px;
    particle.style.height = particle.style.width;
    particle.style.left = ${Math.random() * 100}vw;
    particle.style.top = ${Math.random() * 100}vh;
    particle.style.animationDuration = ${Math.random() * 6 + 4}s;
    particle.style.animationDelay = ${Math.random() * 5}s;
    document.body.appendChild(particle);
}