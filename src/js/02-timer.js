import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('[data-start]');
btnStart.setAttribute('disabled', 'active');

const inputValue = document.querySelector('#datetime-picker');
const timerEl = document.querySelector('.timer');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(...selectedDates) {
    let intervalId = null;

    const currentTime = Date.parse(selectedDates[1]);

    if (currentTime < Date.now()) {
      btnStart.setAttribute('disabled', 'active');
      return Notify.failure('Please choose a date in the future');
    }

    btnStart.addEventListener('click', onSubmit);
    btnStart.removeAttribute('disabled');

    function onSubmit() {
      return (intervalId = setInterval(() => {
        btnStart.setAttribute('disabled', 'active');

        const currentTime = Date.parse(selectedDates[1]);
        const resultOfDifferenceTime = currentTime - Date.now();
        const deltaTime = convertMs(resultOfDifferenceTime);
        updateTimerFace(deltaTime);

        if (resultOfDifferenceTime < 1000) {
          clearInterval(intervalId);
        }
      }, 1000));
    }
  },
};

flatpickr(inputValue, { ...options });

function updateTimerFace({ days, hours, minutes, seconds }) {
  (timerValue[0].textContent = `${days}`),
    (timerValue[1].textContent = `${hours}`),
    (timerValue[2].textContent = `${minutes}`),
    (timerValue[3].textContent = `${seconds}`);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(13522443)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//----Styles----//
timerEl.style.marginTop = '20px';
timerEl.style.display = 'flex';
timerEl.style.gap = '10px';
// console.log(timerEl);

const timerValue = document.querySelectorAll('.field .value');
timerValue[0].style.display = 'flex';
timerValue[0].style.justifyContent = 'center';
timerValue[0].style.fontSize = '36px';
timerValue[1].style.display = 'flex';
timerValue[1].style.justifyContent = 'center';
timerValue[1].style.fontSize = '36px';
timerValue[2].style.display = 'flex';
timerValue[2].style.justifyContent = 'center';
timerValue[2].style.fontSize = '36px';
timerValue[3].style.display = 'flex';
timerValue[3].style.justifyContent = 'center';
timerValue[3].style.fontSize = '36px';

const nameValue = document.querySelectorAll('.field .label');
nameValue[0].style.textTransform = 'uppercase';
nameValue[1].style.textTransform = 'uppercase';
nameValue[2].style.textTransform = 'uppercase';
nameValue[3].style.textTransform = 'uppercase';
