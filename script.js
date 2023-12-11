document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("scrollVideo");
    var videoContainer = document.querySelector(".video-container");
  
    var playVideoOnScroll = function () {
      var videoPosition = videoContainer.getBoundingClientRect().top;
  
      if (videoPosition < window.innerHeight && videoPosition > 0) {
        video.play();
        window.removeEventListener("scroll", playVideoOnScroll); // Stop listening for scroll events once video is played
      }
    };
  
    window.addEventListener("scroll", playVideoOnScroll);
  });


  var burgerMenu = document.getElementById("burger-menu");
var navLinks = document.getElementById("nav-links");

burgerMenu.addEventListener("click", showmenu);

function showmenu() {
    navLinks.style.right = "0px"; // Brug samme enhedsmål som i CSS
}

function hidemenu() {
    navLinks.style.right = "-400px";
}


  