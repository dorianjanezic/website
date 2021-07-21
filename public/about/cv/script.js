let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

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
    background(0);
  }
  
  function draw() {
      background(0);
  }