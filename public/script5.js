let outerD = 250;
let speed = 5;
let x2,y2;
let positionx = 0;
let growspeed = 0.5;
let effects = [];
let time = 0;
let hitrost = 0;
let hitrost1 = 0;

let timer;

document.body.style.cursor = 'none';
let text = document.getElementById("txttt");

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
}

function draw() {

  time = time + 0.3;
  time1 = time + 0.5;

  background(0);
  positionx = map(mouseX, 0, width/2, 400, 0)

  for (let x1 = 0; x1 < width; x1 += width/40) {

    hitrost = (x1 + time) % width; 
    hitrost1 = width-((x1 + time) % width);
    let op1 = hitrost / width;
    let op2 = hitrost1 / width;
    op1 =(pow(2*op1-1, 2)*-1 + 1)*150
    op2 =(pow(2*op2-1, 2)*-1 + 1)*150

  fill(0)
  stroke(op2)
  triangle(hitrost1, height+10, mouseX, mouseY, hitrost1 += 8, height+10);

  stroke(op1)
  triangle(hitrost, -10, mouseX, mouseY, hitrost +=8, -10);
  }

  // for (y1 = 0; y1 < height; y1 += height/18) {

  //   hitrost = (y1 + time) % height; 
  //   hitrost1 = height-((y1 + time) % height);
  //   let op1 = hitrost / height;
  //   let op2 = hitrost1 / height;
  //   op1 =(pow(2*op1-1, 2)*-1 + 1)*150
  //   op2 =(pow(2*op2-1, 2)*-1 + 1)*150

  //   fill(0)
  //   stroke(op2)
  //   triangle(0-10, hitrost1, mouseX, mouseY, 0-10, hitrost1 += 8)

  // //   stroke(op1)
  //   triangle(width+10, hitrost, mouseX, mouseY, width+10, hitrost += 8)
  // }
}



function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }
  function rainbow() {
    background(random(0,10))
  }
