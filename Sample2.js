var obstacles = [];
var img;

function preload() {

    img = loadImage("img.png");
}

function setup() {
    createCanvas(600, 800);
    for (let i = 0; i < 8; i++)
        obstacles.push(new Obstacle(i * 60))
    player = new Player();
    fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    noCursor();


}

function draw() {
    image(img, 0, 0);
    for (let i = 0; i < obstacles.length; i++)
        obstacles[i].draw();
    player.draw();

}

class Obstacle {
    constructor(x) {
        this.x = x;
        this.y = 80;
        this.SpeedY = random(3, 5);
        this.red = random(155);
        this.green = random(155);
        this.blue = random(155);
    }
    draw() {
        fill(this.red + 100, this.green + 100, this.blue + 100);
        rect(this.x, this.y, 20, 200);
        strokeWeight(5);
        this.y = this.y + this.SpeedY;
        if (this.y > canvas.height) {
            this.SpeedY = -1 * this.SpeedY;
        }
        if(this.y < -60) {
            this.SpeedY = -1 * this.SpeedY
        }
        var hit = collideRectRect(mouseX, mouseY, 10, 10, this.x, this.y, 20, 200)
        if (hit === true) {
            print("ARGH!");
            
        }
    }
}

class Player {
    constructor() {
        this.x = mouseX;
        this.y = mouseY;
    }
    draw() {
        fill(255, 0, 0)
        rect(mouseX, mouseY, 10, 10);
    }
}

