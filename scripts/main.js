window.onload = function () { 

  // // Parallax effect on scroll
  // var h = document.documentElement, 
  //   b = document.body,
  //   st = 'scrollTop',
  //   sh = 'scrollHeight';
  // var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

  // window.onscroll = function () { 

  //   document.getElementById("splash").style.transform = "translateY(" + h[st]/2 * -1 + "px)";

  // }; 

  // Parallax effect on mousemove 
  var txOffset = 0,
    tyOffset = 0,
    tzOffset = 0,
    tRotate = 0;

  window.onmousemove = function(event) {
    if (window.innerWidth > 600) {
      txOffset = event.clientX / 40;
      tyOffset = event.clientY / 40;

      document.getElementById("fish").style.transform = "translate3d("
        + txOffset + "px, "
        + tyOffset + "px, "
        + tzOffset +"px) rotate("
        + tRotate + "deg)";

      document.getElementById("leaves").style.transform = "translate3d("
        + txOffset/2 + "px, "
        + tyOffset/2 + "px, "
        + tzOffset +"px) rotate("
        + tRotate + "deg)";

      document.getElementById("background").style.transform = "translate3d("
        + txOffset/4 + "px, "
        + tyOffset/4 + "px, "
        + tzOffset +"px) rotate("
        + tRotate + "deg)";
    }

  }
};