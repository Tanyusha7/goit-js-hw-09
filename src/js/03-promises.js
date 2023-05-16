import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const btnCreateProm = document.querySelector('button');

btnCreateProm.addEventListener('click', onSubmit);
let position;
let step;

function onSubmit(e) {
  e.preventDefault();
  const inputDelayValue = form.elements['delay'];
  // delay = Number(inputDelayValue.value);

  const inputStepValue = form.elements['step'];
  step = Number(inputStepValue.value);

  const inputAmountValue = form.elements['amount'];
  amount = Number(inputAmountValue.value);

  for (let i = 0; i < amount; i += 1) {
    console.log(amount);
    position = 1;
    delay = Number(inputDelayValue.value);

    setTimeout(() => {
      createPromise(position, delay);
      delay += step;
      position += 1;
    }, delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      return new Promise(resolve => {
        onSucces({ position, delay });
      });
    }
    onError({ position, delay });
  }, delay);
}

function onSucces({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
