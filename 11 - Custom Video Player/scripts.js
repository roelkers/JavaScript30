/*Get Our Elements */
const video = document.querySelector('video');
const inputVolume = document.querySelector('input[name="volume"]');
const inputSpeed = document.querySelector('input[name="playbackRate"]');
const buttonPlay = document.querySelector('button.toggle');
const buttonsSkip = document.querySelectorAll('[data-skip]');
const progressBar = document.querySelector('div.progress');
const progressFilledBar = document.querySelector('div.progress__filled');
let mousedown;
/*Build the function */
function playOrPause(){
  video.paused ?
  video.play() :
  video.pause();
}

function adjustVolume(event){
  video.volume = event.target.value;
}

function adjustSpeed(event){
  video.playbackRate = event.target.value;
}

function adjustProgressBar(event){
  const progressInPct = (video.currentTime/video.duration)*100;
  progressFilledBar.style.flexBasis = `${progressInPct}%`;
}

function skip(event){
  video.currentTime += parseFloat(this.dataset.skip);
}

function scrub(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/*Hook up Event Listeners */

video.addEventListener("timeupdate",adjustProgressBar);
video.addEventListener("click",playOrPause);
buttonPlay.addEventListener("click", playOrPause);
inputVolume.addEventListener("change",adjustVolume);
inputSpeed.addEventListener("change",adjustSpeed);
progressBar.addEventListener("click", scrub);
progressBar.addEventListener("mousemove", (e) => mousedown && scrub(e));
progressBar.addEventListener("mousedown", () => mousedown = true);
progressBar.addEventListener("mouseup", () => mousedown = false);
