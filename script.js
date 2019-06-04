
var video = document.getElementById("videomoohb");
var btn = document.getElementById("BtnPlayPause");


function FunctionPlayPause() {
  if (video.paused) {
    video.play();
	btn.classList.toggle('fa-pause-circle-o');
	btn.classList.toggle('fa-play-circle-o');
  } else {
    video.pause();
	btn.classList.toggle('fa-play-circle-o');	
	btn.classList.toggle('fa-pause-circle-o');	
  }
}
function FunctionMuteUnmute() {
var btnMute = document.getElementById("BtnMuteUnmute");
video.muted = !video.muted;
btnMute.classList.toggle('fa-volume-up');	
btnMute.classList.toggle('fa-volume-off');	
}

