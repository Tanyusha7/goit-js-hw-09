function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
console.log(body);
const startBtn = document.querySelector('[data-start]');
console.log(startBtn);

const stopBtn = document.querySelector('[data-stop]');
console.log(stopBtn);

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  const color = getRandomHexColor();
  body.style.background = color;

  setTimeout(() => {
    console.log('hello');
  }, 1000);
}
function onStopBtnClick() {
  console.log(poka);
}
