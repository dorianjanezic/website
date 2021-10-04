
  (function(){
    var button = document.getElementById("project-bgvideo__play");
    var video = document.getElementById("project-bgvideo");
    var img = document.getElementById("project-bgvideo_poster")
    var isPlaying = false;

    if(video.children[0].tagName.toLowerCase() === "iframe"){
      button.onclick = function(e){
        e.preventDefault();
        isPlaying = true;
        if(!video.children[0].src.includes("?")) video.children[0].src += "?";
        video.children[0].src += "&auto_play=true&autoplay=1";
        // setTimeout(function(){
        img.style.opacity = button.style.opacity = 0;
        img.style.pointerEvents = "none";
        // }, 500)
      }
    }

    var nav = document.getElementsByClassName("main-nav");
    var t;
    window.addEventListener("load", resetTimer);
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("mousedown", resetTimer);
    window.addEventListener("touchstart", resetTimer);
    window.addEventListener("click", resetTimer);
    window.addEventListener("scroll", resetTimer);
    window.addEventListener("keypress", resetTimer);

    function hideNav() {
      if(isPlaying){
        // nav.style.opacity = 0;
      }
    }

    function resetTimer() {
        clearTimeout(t);
        // nav.style.opacity = 1;
        t = setTimeout(hideNav, 500)
        // 1000 milisec = 1 sec
    }
  })();
