function setup() 
    {
   createCanvas(600, 800);
    }
function draw() {
    drawPlayer(mouseX, mouseY);
    }
    
function drawPlayer(x, y) {
    background(125);
    fill(255);
    strokeWeight(5);
    rect(x, y, 200, 130);
    push();
    translate(x, y);
    fill(0);
    stroke(0);
    strokeWeight(10);
    fill(255);
    ellipse(5, 200, 100, 100);
    ellipse(205, 200, 100, 100);
    pop();
}

var posX = Math.floor(Math.random() * 600);
var posY = 10;
var rectX = 10;
var rectY = 10;
var plaX = 50;
var plaY = 10;

function draw() {
    background(220);
    drawPlayer(plaX, plaY);
    plaX = plaX + 5;
      fill(255, 0, 0);
      ellipse(posX, posY, 50, 50);
      posY += 5;
      if(keyIsPressed === true) {
          posX = Math.floor(Math.random() * 600);
          posY = Math.floor(Math.random() * 800);
          plaX = Math.floor(Math.random() * 600);
          plaY = Math.floor(Math.random() * 800);
      }

      if(posY > height) {
        posY = 0;
        posX = Math.floor(Math.random() * 600);
      }

      if(plaX > width) {
        plaX = 0;
      }


  }
