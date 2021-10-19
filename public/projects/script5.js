
let theta = 0;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
  img = loadImage('wt-2.png');
  img1 = loadImage('https://photos.app.goo.gl/LubSqRgc5L5RwsuX8');
  img2 = loadImage('untld.png');
  img3 = loadImage('lasers.png');
 
}

function draw() {
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  

  
orbitControl(1,1,1);
  background(0);
  ambientLight(1500);
  
 
  

push();

  
  translate(width/3,-width/8, -200)
  rotateX(frameCount * 0.002)
  rotateY(frameCount * 0.002);
  texture(img);
  box(width/5 ,width/5,width/5);
pop(); theta += 0.03;


push();
  
 
 translate(-width/3,width/8,-150)
  rotateY(frameCount * -0.002)
  rotateX(frameCount * -0.001)

  rotateY(705)
  texture(img2)
  box(width/4,width/4, width/4)
  pop();


  push();
  
 
 translate(-width/20,-width/8,00)
  rotateY(frameCount * -0.002)
  rotateX(frameCount * 0.001)

  rotateY(705)
  texture(img1)
  box((width/7 ,width/7,width/7))

  pop();

  push();

  
  translate(width/6,width/8, -100)
  rotateX(frameCount * -0.002)
  rotateY(frameCount * -0.002);
  texture(img3);
  box(width/8 ,width/8,width/8);
pop();

}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}