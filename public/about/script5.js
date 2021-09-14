//final project: Enigma
let outerD=400
let speed =1;
let x2,y2;
let positionx = 0;
positiony = 0;

document.body.style.cursor = 'none';

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
}

function draw() {
  
  background(0);
  //inner circle (not moving)
  noStroke()
  fill(200)
  circle(mouseX, mouseY, 50)

  //outer circle #1 (moving)
  strokeWeight(20)
  stroke(180)
  noFill()
  circle(mouseX, mouseY, outerD)

  strokeWeight(15)
  stroke(160)
  noFill()
  circle(mouseX, mouseY, outerD + 30)

  //outter circle #2 (moving)
  strokeWeight(20)
  stroke(140)
  noFill()
  circle(mouseX, mouseY, outerD + 200)

  strokeWeight(15)
  stroke(120)
  noFill()
  circle(mouseX, mouseY, outerD + 230)

  //outer circle #3 (moving)
  strokeWeight(25)
  stroke(100)
  noFill()
  circle(mouseX, mouseY, outerD + 400)

  strokeWeight(30)
  stroke(80)
  noFill()
  circle(mouseX, mouseY, outerD + 430)

 outerD -= speed;
  
  if (outerD + 430 < 150) {
    speed *= -1;
    // outerD = width;
  } 
}

function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }
