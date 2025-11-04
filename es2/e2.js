let seconds = 0;
let minutes = 0;

const minutesSection = document.getElementById('minutes-section');

const KEY = 'memory';
const timeSaved = sessionStorage.getItem(KEY);

if (timeSaved) {
  const parts = timeSaved.split(':');
  minutes = parseInt(parts[0], 10);
  seconds = parseInt(parts[1], 10);
}

const goTimer = () => {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  minutesSection.innerText = `${minutes} min : ${seconds} sec`;

  sessionStorage.setItem(KEY, `${minutes} min : ${seconds} sec`);
};

setInterval(goTimer, 1000);

window.addEventListener(onload, function () {
  goTimer();
});
