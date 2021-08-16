 'use strict';

 function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
  }

 var img;
 var canvas;
 
 function preload() {
   img = loadImage('../assets/black_white.png');
 }
 
 function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
 }
 

 function setImage () {

  if (document.getElementById("chatnimal").hover)
   document.getElementById("projects-main").style.backgroundImage = 'url("winter-show1.jpg")';
 }