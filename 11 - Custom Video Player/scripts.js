/*Get Our Elements */
const video = document.querySelector('video');
const inputVolume = document.querySelector('input[name="volume"]');
const inputSpeed = document.querySelector('input[name="playbackRate"]');
const buttonPlay = document.querySelector('button.toggle');
const buttonsSkip = document.querySelectorAll('[data-skip]');

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

function skip(event){
  video.currentTime += parseFloat(this.dataset.skip);
}

/*Hook up Event Listeners */

video.addEventListener("click",playOrPause);
buttonPlay.addEventListener("click", playOrPause);
inputVolume.addEventListener("change",adjustVolume);
inputSpeed.addEventListener("change",adjustSpeed);
buttonsSkip.forEach(button => button.addEventListener("click",skip));
