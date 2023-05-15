import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btnStart = document.querySelector('[data-start]');
btnStart.setAttribute('disabled', 'active');
console.log(btnStart);
const inputValue = document.querySelector('#datetime-picker');
// console.log(inputValue);
const timerEl = document.querySelector('.timer');
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

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date('2023, May 15'),
  minuteIncrement: 1,
  onClose(...selectedDates) {
    const disabledBtn = btnStart.getAttribute('disabled');
    const startTime = options.defaultDate.getTime();

    if (selectedDates[0] < options.defaultDate) {
      btnStart.getAttribute('disabled');
      Notify.failure('Please choose a date in the future');
      return;
    }

    btnStart.removeAttribute('disabled');
    if (disabledBtn) {
      return setInterval(() => {
        btnStart.setAttribute('disabled', 'active');

        const currentTime = Date.now(selectedDates);
        const resultOfDifferenceTime = startTime - currentTime;
        // console.log(startTime);
        // console.log(currentTime);
        // console.log(resultOfDifferenceTime);
        const deltaTime = convertMs(resultOfDifferenceTime);
        updateTimerFace(deltaTime);
      }, 1000);
    }

    console.log(selectedDates[0]);
    console.log(Date.now(selectedDates[0]));
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