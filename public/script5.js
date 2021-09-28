//final project: Enigma

let outerD = 250;
let speed = 5;
let x2,y2;
let positionx = 0;
positiony = 0;
let growspeed = 0.5;
let effects = [];

let timer;

document.body.style.cursor = 'none';
let text = document.getElementById("txttt");

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
}

function draw() {

background(0);



positionx = map(mouseX, 0, width/2, 400, 0)

  fill(0)
  stroke(150)
  for (let x1 = width/5; x1 < width*4/5; x1 += 0.01) {
    triangle(x1, -10, mouseX+positionx, mouseY, x1 +=8, -10);
    // triangle(x1, height, mouseX-positionx, mouseY, x1 += 8, height);
  }

  

  for (let x1 = width/5; x1 < width*4/5; x1 += 3) {

    triangle(x1, height+10, mouseX-positionx, mouseY, x1 += 8, height+10);
  }
  noStroke()
fill(255)
  square(mouseX, mouseY, 8)
}

function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }
  function rainbow() {
    background(random(0,10))
  }
