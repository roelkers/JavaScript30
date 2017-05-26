const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerButtons = document.querySelectorAll('button[data-time]');
const input = document.querySelector('input[name="minutes"]');

let counter = 0;
let intervalId = 0;

function padZeros(minutes,seconds){
  return `${(minutes<10)?"0"+minutes:minutes}:${(seconds<10)?"0"+seconds:seconds}`
}

function updateTimeLeft(){
  const minutesLeft = Math.floor(counter/60);
  const secondsLeft = counter % 60;

  timeLeft.textContent= padZeros(minutesLeft,secondsLeft);
  counter--;
}

function stopTimer(){
 clearInterval(intervalId);
 timeLeft.textContent= "Time is up";
 endTime.textContent="";
}

function startTimer(){
  if(intervalId)
    clearInterval(intervalId);
  intervalId = setInterval(updateTimeLeft,1000);
  setTimeout(stopTimer,counter*1000);

  const minutesLeft = Math.floor(counter/60);
  const secondsLeft = counter % 60
  const date = new Date();

  const endHour = date.getHours() + Math.floor((date.getMinutes() + minutesLeft)/60);
  const endMinute = date.getMinutes() + minutesLeft + Math.floor((date.getSeconds() + secondsLeft)/60);
  endTime.textContent = `Be back at ${padZeros(endHour,endMinute)}`;
}

function startButtonTimer(){
   counter = this.dataset.time
   startTimer();
}

function startFormTimer(e){
  e.preventDefault();
  const minutes = input.value;
  counter = parseInt(minutes*60)
  startTimer();
}

timerButtons.forEach(button => button.addEventListener("click",startButtonTimer));
document.addEventListener('submit',startFormTimer);
