const canvas = document.getElementById('fireCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size to cover the entire window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Fire particle array
let fireParticles = [];

// Fire particle constructor
function FireParticle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 2 - 1;  // Random horizontal speed
    this.speedY = Math.random() * -2 - 1;  // Random upward speed (increase upward force)
    this.color = `rgb(${Math.random() * 255}, ${Math.random() * 100}, 0)`;  // Random orange/red color
}

// Draw fire particles
FireParticle.prototype.draw = function() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
}

// Update fire particle properties
FireParticle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size *= 0.98;  // Shrink the particle over time

    // If the particle goes off the screen or gets too small, reset it
    if (this.size <= 0) {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height * 0.8;  // Make particles start higher up (80% of canvas height)
        this.size = Math.random() * 5 + 1;
    }
}

// Create new fire particles at the bottom of the canvas
function createFire() {
    for (let i = 0; i < 5; i++) {
        let x = Math.random() * canvas.width;
        let y = canvas.height * 0.8;  // Adjust y to start a bit higher than the very bottom
        fireParticles.push(new FireParticle(x, y));
    }
}

// Animate the fire background
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas

    createFire();  // Create fire particles at the bottom

    // Update and draw each fire particle
    for (let i = 0; i < fireParticles.length; i++) {
        fireParticles[i].update();
        fireParticles[i].draw();
    }

    requestAnimationFrame(animate);  // Call animate again for the next frame
}

// Start the animation
animate();

