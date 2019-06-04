
var video = document.getElementById("videomoohb");
var btn = document.getElementById("BtnPlayPause");

function FunctionPlayPlause() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

if (video.paused) {
  btn.innerHTML = "Play";
}
