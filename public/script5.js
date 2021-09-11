//final project: Enigma

let outerD = 250;
let speed = 5;
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

positionx = map(mouseX, 0, width/2, 400, 0)

  fill(0)
  stroke(200)
  for (let x1 = width/5; x1 < width*4/5; x1 += 0.01) {
    triangle(x1, 0, mouseX+positionx, mouseY, x1 +=8, 0);
    // triangle(x1, height, mouseX-positionx, mouseY, x1 += 8, height);
  }

  for (let x1 = width/5; x1 < width*4/5; x1 += 3) {
    triangle(x1, height, mouseX-positionx, mouseY, x1 += 8, height);
  }
  noStroke()
fill(255)
  square(mouseX, mouseY, 8)

//   //inner circle (not moving)
//   noStroke()
//   fill(176, 115, 181)
//   circle(mouseX, mouseY, 150)

//   //outer circle #1 (moving)
//   strokeWeight(20)
//   stroke(176, 115, 181)
//   noFill()
//   circle(mouseX, mouseY, outerD)

//   strokeWeight(15)
//   stroke(157, 115, 181)
//   noFill()
//   circle(mouseX, mouseY, outerD + 30)

//   //outter circle #2 (moving)
//   strokeWeight(20)
//   stroke(157, 115, 181)
//   noFill()
//   circle(mouseX, mouseY, outerD + 200)

//   strokeWeight(15)
//   stroke(137, 115, 181)
//   noFill()
//   circle(mouseX, mouseY, outerD + 230)

//   //outer circle #3 (moving)
//   strokeWeight(25)
//   stroke(137, 115, 181)
//   noFill()
//   circle(mouseX, mouseY, outerD + 400)

//   strokeWeight(30)
//   stroke(117, 115, 181)
//   noFill()
//   circle(mouseX, mouseY, outerD + 430)

//  outerD -= speed;
  
//   if (outerD + 430 < 150) {
//     speed *= 1;
//     outerD = width;
//   }

  // //see if outerD is out of range
  // if (outerD >width) {
  //   speed *=-1;
  //   //outerD = 250;   
  // }

}

function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }
