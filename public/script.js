let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');


let outerD = 50;
let speed = 0.3;
let x2,y2;

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


//global variables
let button;
let canvas;
var mic;
let anglea, beta, gamma;

//load font
let myFont;
function preload() {
  myFont = loadFont('biome.ttf');
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}


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
  circle(mouseX, mouseY, 50)

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
  circle(mouseX, mouseY, outerD + 200)

  strokeWeight(15)
  stroke(150,200)
  noFill()
  circle(mouseX, mouseY, outerD + 230)

  //outer circle #3 (moving)
  strokeWeight(25)
  stroke(180)
  noFill()
  circle(mouseX, mouseY, outerD + 300)

  strokeWeight(30)
  stroke(200,220)
  noFill()
  circle(mouseX, mouseY, outerD + 330)


 outerD -= speed;
  
  if (outerD + 430 < 10) {
    speed *= 0.3;
    outerD = 60;
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
    