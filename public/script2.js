let g = 0;
let canvas;

function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
}
function draw() {


  for (x = 0; x < width; x += 80) {
    for (y = 0; y < height; y += 80) {
      strokeWeight(5);
      stroke(100);
      fill(g);
      square(x, y, 80);
    }
  }

  for (x = 0; x < mouseX; x += 80) {
    for (y = 0; y < height; y += 80) {
      noStroke();
      fill(255);
      circle(x, y, 10);

    }
  }
}