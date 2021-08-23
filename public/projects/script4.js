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

 window.addEventListener('load', function (){
   console.log('loaded');

   document.getElementById("chatnimal").addEventListener('mouseover', function () {
     document.getElementById('bg-image').style.opacity = 1;
     document.getElementById('about').style.opacity = -1;
     document.getElementById('projects').style.opacity = -1;
   })

   document.getElementById("chatnimal").addEventListener('mouseout', function () {
    document.getElementById('bg-image').style.opacity = 0;
    document.getElementById('about').style.opacity = 1;
    document.getElementById('projects').style.opacity = 1;
  })

  document.getElementById("biophonica").addEventListener('mouseover', function () {
    document.getElementById('bg-image1').style.opacity = 1;
    document.getElementById('about').style.opacity = -1;
    document.getElementById('projects').style.opacity = -1;

  })

  document.getElementById("biophonica").addEventListener('mouseout', function () {
   document.getElementById('bg-image1').style.opacity = 0;
   document.getElementById('about').style.opacity = 1;
   document.getElementById('projects').style.opacity = 1;
 })

 document.getElementById("untold-town").addEventListener('mouseover', function () {
  document.getElementById('bg-image2').style.opacity = 1;
  document.getElementById('about').style.opacity = -1;
  document.getElementById('projects').style.opacity = -1;
})

document.getElementById("untold-town").addEventListener('mouseout', function () {
 document.getElementById('bg-image2').style.opacity = 0;
 document.getElementById('about').style.opacity = 1;
 document.getElementById('projects').style.opacity = 1;
})

document.getElementById("city").addEventListener('mouseover', function () {
  document.getElementById('bg-image3').style.opacity = 1;
  document.getElementById('about').style.opacity = -1;
  document.getElementById('projects').style.opacity = -1;
})

document.getElementById("city").addEventListener('mouseout', function () {
 document.getElementById('bg-image3').style.opacity = 0;
 document.getElementById('about').style.opacity = 1;
 document.getElementById('projects').style.opacity = 1;
 document.getElementById('about').style.opacity = 1;
})

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar").style.top = "0px";
  } else {
    document.getElementsByClassName("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
})