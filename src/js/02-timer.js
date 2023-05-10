import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const btnStart = document.querySelector('[data-start]');
console.log(btnStart);
const inputValue = document.querySelector('#datetime-picker');
console.log(inputValue);
const timerEl = document.querySelector('.timer');
console.log(timerEl);
const timerValue = document.querySelectorAll('.value');
console.log(timerValue);
console.log(timerValue[0]);

btnStart.addEventListener('click', () => options.onClose());

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date('June 12, 2024'),
  minuteIncrement: 1,
  onClose(selectedDates) {
    setInterval(() => {
      const currentTime = Date.now();
      const startTime = options.defaultDate.getTime();
      console.log(startTime);
      console.log(currentTime);
      //   if (Date.now(selectedDates(1)) > startTime) {
      //     return alert('Please choose a date in the future');
      //   }
      const resultOfDifferenceTime = startTime - currentTime;
      console.log(resultOfDifferenceTime);
      const deltaTime = convertMs(resultOfDifferenceTime);
      updateTimerFace(deltaTime);
    }, 1000);
    console.log(currentTime[0]);
    console.log(Date.now(selectedDates[0]));
  },
};

flatpickr(inputValue, { ...options });

timerEl.style.marginTop = '20px';
timerEl.style.display = 'flex';
timerEl.style.gap = '10px';
// console.log(timerValue.firstElemetChild);
// timer.children.style.display = 'flex';
// // timer.style.
// console.log(timer.firstElementChild);
// timerValue[03].style.display = 'flex';
// timerValue.style.width = '40px';

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
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
