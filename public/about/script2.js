let pointbreak = [];
let pressed = false;
let clicked = 0;
let pointsx = [];
let pointsy = [];
let xvalues = [];
let yvalues = [];
sides = 1;


function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }
  
  function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');


  for (let i = 0; i < 50; i++) { //random point generator
fill(255)
    cx = random(0,1);
    cy = random(0,1);


    //create x,y locations for the shape verticies 
    pointsx.push(cx);
    pointsy.push(cy);

  }
fill(255)
  for (let i = 0; i < sides; i++) {
    strokeWeight(100)
    fill(255)


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
fill(255)
      pointbreak.push(new Bubble(xcor, ycor, 2, random(0, 0.1)));
    }
    print(pointbreak.length)
  }
  fill(255)
  pointdraw(random(width), random(height), random(width), random(height))
  pointdraw(random(width), random(height), random(width), random(height))
  pointdraw(random(width), random(height), random(width), random(height))
  pointdraw(random(width), random(height), random(width), random(height))
  pointdraw(random(width), random(height), random(width), random(height))



}

function draw() {

  background(0);
  strokeWeight(1);
  stroke(255)
  line(width / 2, 0, width / 2, height);

fill(255)
  drawshape(pointsx, pointsy, sides)



  //explode line when clicked
 
    background(0);
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


class Bubble {
  constructor(Xpos, Ypos, speed, direction) {
    this.Xpos = Xpos;
    this.Ypos = Ypos;
    this.initialX = Xpos;
    this.initialY = Ypos;

    this.speed = speed;
    this.direction = direction;

    this.diameter = 1;
    this.strokeC = 255;
    this.strokeW = 2;


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

    this.Xpos = this.Xpos + ((this.targetX - this.Xpos) * 0.08)
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
  fill(255);

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

    pointbreak.push(new Bubble(xcor-100, ycor-100, 2, random(0, 02 * 1)-100));
  }
}