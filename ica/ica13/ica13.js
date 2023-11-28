// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// console.log("loaded properly")

class Ball { 
    // x and y are coordinates, velx and vely is velocity of how fast our balls move
    constructor(x, y, velX, velY, color, size) {
        this.x = x; 
        this.y = y; 
        this.velX = velX; 
        this.velY = velY;
        this.color = color; 
        this.size = size; 
    }

    draw() { 
        // ctx = context
        ctx.beginPath(); 
        ctx.fillStyle = this.color; 
        // this makes the circle, how big it is, and draws a line from 0 to 360 
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }

    update() {
        // this handles the right edge of the screen 
        // checks if the ball is at the far right edge of a screen  
        if ((this.x + this.size) >= width) { 
            this.velX = -(this.velX); 
        }

        // this handles the left edge of the screen 
        if ((this.x + this.size) <= 0) { 
            this.velX = -(this.velX); 
        }

        // this handles the bottom of the screen 
        if ((this.y + this.size) >= height) { 
            this.velY = -(this.velY); 
        }

        // this handles the top of the screen (0,0 is top left)
        if ((this.y + this.size) <= 0) { 
            this.velY = -(this.velY); 
        }

        this.x += this.velX; 
        this.y += this.velY; 
        // makes ball change colors every time it hits an edge 
        this.color = randomRGB();
    }

    collisionDetect() { 
        for (const ball of balls) { 
            if (this !== ball) { 
                const dx = this.x - ball.x; 
                const dy = this.y - ball.y; 
                const distance = Math.sqrt(dx*dx + dy*dy); 

                if (distance < this.size + ball.size) { 
                    ball.color = this.color = randomRGB(); 
                }
            }
        }
    }
}

const balls = []; 

while(balls.length < 10) { 
    const size = random(25,50); 
    const ball = new Ball(
        // picking a random number, making sure the size is in the screen 
        random(0+size, width-size), 
        random(0+size, height-size),
        random(-5,5),
        random(-5,5),
        randomRGB(), 
        size, 
    );

    balls.push(ball); 
}

// console.log(balls)

function loop() { 
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)"; 
    ctx.fillRect(0, 0, width, height); 

    for (const ball of balls) { 
        ball.draw(); 
        ball.update(); 
        ball.collisionDetect(); 
    }

    requestAnimationFrame(loop);
}

loop();