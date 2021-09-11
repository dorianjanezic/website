let outerD = 50;
let speed = 0.5;
let x2,y2;
let growspeed = 0.3;

//global variables
let button;
let canvas;
var mic;
let anglea, beta, gamma;
let effects = [];

//load font
// let myFont;
// function preload() {
//   myFont = loadFont('biome.ttf');
// }

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}
document.body.style.cursor = 'none';


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(0);
}

function draw() {
    background(0);

  fill(0)
  noStroke()
  for (let x1 = -8; x1 < width; x1 += 7) {
    // triangle(x1, 0, mouseX, mouseY, x1 +=8, 0);
    triangle(x1, 800, mouseX, mouseY, x1 += 8, 800);
  }

  for (y1 = 0; y1 < height; y1 += 7) {
    // triangle(width, y1, mouseX, mouseY, 0, y1 += 7)
    // triangle(width/2, y1, mouseX, mouseY, 800, y1 += 7)
  }
  //inner circle (not moving)
  noStroke()
  fill(220)
  circle(mouseX, mouseY, 30)

  //outer circle #1 (moving)
  strokeWeight(20)
  stroke(200)
  noFill()
  circle(mouseX, mouseY, outerD)

  strokeWeight(15)
  stroke(200,100)
  noFill()
  circle(mouseX, mouseY, outerD + 30)

  //outter circle #2 (moving)
  strokeWeight(20)
  stroke(230)
  noFill()
  circle(mouseX, mouseY, outerD + 60)

  strokeWeight(15)
  stroke(150,200)
  noFill()
  circle(mouseX, mouseY, outerD + 90)

  //outer circle #3 (moving)
  strokeWeight(25)
  stroke(180)
  noFill()
  circle(mouseX, mouseY, outerD + 120)

  strokeWeight(30)
  stroke(200,220)
  noFill()
  circle(mouseX, mouseY, outerD + 150)


 outerD -= speed;
  
  if (outerD + 430 < 10) {
    speed *= 0.3;
    outerD = 260;
  }


};

function mouseClicked () {
    speed = 10;
      }
      // //see if outerD is out of range
      // if (outerD >width) {
      //   speed *=-1;
      //   //outerD = 250;   
      // }
    


