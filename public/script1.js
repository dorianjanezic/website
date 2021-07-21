let pointbreak = [];
let pressed = false;
let clicked = 0;
let pointsx = [];
let pointsy = [];
let xvalues = [];
let yvalues = [];
sides = 3;
let canvas; 

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

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');




  for (let i = 0; i < 500; i++) { //random point generator

    cx = random(width * 0.20, width);
    cy = random(height * 0.20, height);


    //create x,y locations for the shape verticies 
    pointsx.push(cx);
    pointsy.push(cy);

  }

  for (let i = 0; i < sides; i++) {
    strokeWeight(10)


    if (pointsy[i + 1] == undefined) {
      pointsy[i + 1] = pointsy[0]
      pointsx[i + 1] = pointsx[0]

    }
    let x1 = pointsx[i];
    let x2 = pointsx[i + 1];
    let y1 = pointsy[i];
    let y2 = pointsy[i + 1];

    print(x1, y1)
    for (x = 0; x < (x2 - x1); x++) {



      slope = (y2 - y1) / (x2 - x1);
      xcor = x + x1;
      b = y1 - (slope * x1)
      ycor = (slope * xcor) + b;

      pointbreak.push(new Bubble(xcor, ycor, 2, random(0, 2 * PI)));
    }
    print(pointbreak.length)
  }
  pointdraw(random(width), random(height), random(width), random(height))
  pointdraw(random(width), random(height), random(width), random(height))
  pointdraw(random(width), random(height), random(width), random(height))
  pointdraw(random(width), random(height), random(width), random(height))
  pointdraw(random(width), random(height), random(width), random(height))



}

function draw() {

  background(220);
  strokeWeight(2);
  line(width / 2, 0, width / 2, height);


  drawshape(pointsx, pointsy, sides)



  //explode line when clicked
  if (clicked >= 1) {
    background(220);
    for (let x = 0; x < pointbreak.length; x += 1) {


      if (pressed == true) {
        pointbreak[x].show()
        //return points to initial points
        pointbreak[x].moveto(pointbreak[x].initialX, pointbreak[x].initialY);

      } else {
        pointbreak[x].show();
        pointbreak[x].move();

      }
    }
  }




}


class Bubble {
  constructor(Xpos, Ypos, speed, direction) {
    this.Xpos = Xpos;
    this.Ypos = Ypos;
    this.initialX = Xpos;
    this.initialY = Ypos;

    this.speed = speed;
    this.direction = direction;

    this.diameter = 1;
    this.strokeC = 0;
    this.strokeW = 3;


  }
  move() {


    this.xspeed = this.speed * cos(this.direction);
    this.yspeed = this.speed * sin(this.direction);
    this.Xpos += this.xspeed;
    this.Ypos += this.yspeed;

    if (this.Xpos <= 0 + this.diameter / 2 || this.Xpos >= width - this.diameter / 2) {
      this.direction = this.direction + PI / 2
    }
    if (this.Ypos <= 0 + this.diameter / 2 || this.Ypos >= width - this.diameter / 2) {
      this.direction = this.direction + PI / 2
    }

  }
  show() {
    strokeWeight(this.strokeW);
    stroke(this.strokeC);
    ellipse(this.Xpos, this.Ypos, this.diameter);


  }

  moveto(targetX, targetY) {
    this.targetX = targetX;
    this.targetY = targetY;

    this.Xpos = this.Xpos + ((this.targetX - this.Xpos) * 0.03)
    this.Ypos = this.Ypos + ((this.targetY - this.Ypos) * 0.03)
  }
}


function mousePressed() {
  pressed = true
  clicked = clicked + 1

}

function mouseReleased() {
  pressed = false

}

function drawshape(xvalues, yvalues, sides) {
  noFill();

  beginShape();
  for (let i = 0; i < sides; i++) {

    vertex(xvalues[i], yvalues[i]);

  }
  vertex(xvalues[0], yvalues[0]);
  endShape();
}

function pointdraw(x1, y1, x2, y2) {
  for (x = 0; x < (x2 - x1); x++) {
    print(x2 - x1)


    slope = (y2 - y1) / (x2 - x1);
    xcor = x + x1;
    b = y1 - (slope * x1)
    ycor = (slope * xcor) + b;

    pointbreak.push(new Bubble(xcor, ycor, 2, random(0, 2 * PI)));
  }
}