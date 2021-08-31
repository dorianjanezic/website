//final project: Enigma

let outerD = 250;
let speed = 5;
let x2,y2;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
}

function draw() {
  background(0);



  fill(255)
  noStroke()
  for (let x1 = 0; x1 < width; x1 += 100) {
    triangle(x1, 0, mouseX, mouseY, x1 +=50, 0);
    triangle(x1, height, mouseX, mouseY, x1 += 50, height);
  }

  for (y1 = 0; y1 < height; y1 += 3) {
    triangle(0, y1, mouseX, mouseY, 0, y1 += 50)
    triangle(width, y1, mouseX, mouseY, width, y1 += 50)
  }

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
