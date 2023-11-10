let ellipses=[]

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("background");
  background (0);
}

function draw() {

  fill(242,177,85);
  
for (let i = ellipses.length - 1; i >= 0; i--){
  ellipses[i].update();
  ellipses[i].display();
  
  if (ellipses[i].isOutsideCanvas() || ellipses[i].size <=0) {
    ellipses.splice(i, 1);
     }
   }
}

function mouseMoved() {
  let newEllipse = new Ellipse(mouseX, mouseY);
  ellipses.push(newEllipse);
}

class Ellipse {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 50;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size -= 0.5;
  }

  display() {
    let gradient = map(this.x,248, width,248,255); 
    fill(gradient, gradient, gradient);
    ellipse(this.x, this.y, this.size);
  }

  isOutsideCanvas() {
    return this.x < 0 || this.x > width || this.y < 0 || this.y > height;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}