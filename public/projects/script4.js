 'use strict'; 

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
     document.getElementById('biophonica').style.opacity = -1;
     document.getElementById('untold-town').style.opacity = -1;
     document.getElementById('city').style.opacity = -1;
     document.getElementById("chatnimal").style.opacity = 0.8;
   })

   document.getElementById("chatnimal").addEventListener('mouseout', function () {
    document.getElementById('bg-image').style.opacity = 0;
    document.getElementById('about').style.opacity = 1;
    document.getElementById('projects').style.opacity = 1;
    document.getElementById('biophonica').style.opacity = 1;
    document.getElementById('untold-town').style.opacity = 1;
    document.getElementById('city').style.opacity = 1;
    document.getElementById("chatnimal").style.opacity = 1;
  })

  document.getElementById("biophonica").addEventListener('mouseover', function () {
    document.getElementById('bg-image1').style.opacity = 1;
    document.getElementById('about').style.opacity = -1;
    document.getElementById('projects').style.opacity = -1;
    document.getElementById('chatnimal').style.opacity = -1;
    document.getElementById('untold-town').style.opacity = -1;
    document.getElementById('city').style.opacity = -1;
    document.getElementById("biophonica").style.opacity = 0.8;

  })

  document.getElementById("biophonica").addEventListener('mouseout', function () {
   document.getElementById('bg-image1').style.opacity = 0;
   document.getElementById('about').style.opacity = 1;
   document.getElementById('projects').style.opacity = 1;
   document.getElementById('chatnimal').style.opacity = 1;
   document.getElementById('untold-town').style.opacity = 1;
   document.getElementById('city').style.opacity = 1;
   document.getElementById("biophonica").style.opacity = 1;

 })

 document.getElementById("untold-town").addEventListener('mouseover', function () {
  document.getElementById('bg-image2').style.opacity = 1;
  document.getElementById('about').style.opacity = -1;
  document.getElementById('projects').style.opacity = -1;
      document.getElementById('biophonica').style.opacity = -1;
    document.getElementById('chatnimal').style.opacity = -1;
    document.getElementById('city').style.opacity = -1;
    document.getElementById("untold-town").style.opacity = 0.8;
    
})

document.getElementById("untold-town").addEventListener('mouseout', function () {
 document.getElementById('bg-image2').style.opacity = 0;
 document.getElementById('about').style.opacity = 1;
 document.getElementById('projects').style.opacity = 1;
 document.getElementById('biophonica').style.opacity = 1;
 document.getElementById('chatnimal').style.opacity = 1;
 document.getElementById('city').style.opacity = 1;
 document.getElementById("untold-town").style.opacity = 1;
})

document.getElementById("city").addEventListener('mouseover', function () {
  document.getElementById('bg-image3').style.opacity = 1;
  document.getElementById('about').style.opacity = -1;
  document.getElementById('projects').style.opacity = -1;
  document.getElementById('biophonica').style.opacity = -1;
  document.getElementById('untold-town').style.opacity = -1;
  document.getElementById('chatnimal').style.opacity = -1;
  document.getElementById("city").style.opacity = 0.8;
})

document.getElementById("city").addEventListener('mouseout', function () {
 document.getElementById('bg-image3').style.opacity = 0;
 document.getElementById('about').style.opacity = 1;
 document.getElementById('projects').style.opacity = 1;
 document.getElementById('about').style.opacity = 1;
 document.getElementById('biophonica').style.opacity = 1;
 document.getElementById('untold-town').style.opacity = 1;
 document.getElementById('chatnimal').style.opacity = 1;
 document.getElementById("city").style.opacity = 1;
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

var projectPos = 0;
var projects = ["chatnimal1.1.png", "ux.jpg", "untold.png", "fv.jpg"]
var projectTitles = ["chatnimal", "biophonica", "untold-town", "city"];
// for (var p = 0; p < projects.length, p++) {
//   setMobileBacgkround(p)
// }

function setMobileBacgkround(){
  for (var p = 0; p < projectTitles.length; p++) {
    document.getElementById(projectTitles[p]).style.color = "unset";
  }
  document.getElementsByTagName("body")[0].style.backgroundImage = "url('" + projects[projectPos] + "')";
  // document.getElementById(projectTitles[projectPos]).style.color = "red";
  // console.log(projectPos, projects.length);
  projectPos++;
  if (projectPos + 1 > projects.length) {
    // console.log(projectPos, projects.length);
    projectPos = 0;
  }
}

if (window.innerWidth < 600) {
  setMobileBacgkround();
  setInterval(function(){setMobileBacgkround()}, 3000);
}


