function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;
const disabledBtn = startBtn.getAttribute('disabled');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (disabledBtn) {
    console.log(disabledBtn);
    return;
  }

  timerId = setInterval(() => {
    const color = getRandomHexColor();
    body.style.background = color;
    startBtn.setAttribute('disabled', 'active');
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
}
