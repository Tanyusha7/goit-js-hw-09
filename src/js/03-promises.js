import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const btnCreateProm = document.querySelector('button');
console.dir(form);

btnCreateProm.addEventListener('click', onSubmit);
let position;
function onSubmit(e) {
  e.preventDefault();
  const inputDelayValue = form.elements['delay'];
  delay = Number(inputDelayValue.value);

  const inputStepValue = form.elements['step'];
  step = Number(inputStepValue.value);
  // console.log(step);
  const inputAmountValue = form.elements['amount'];
  amount = Number(inputAmountValue.value);
  // console.log(amount);
  createPromise(position, delay, step);
}

function createPromise(position, delay, step) {
  // delay = delay;
  position = 0;
  return new Promise(() => {
    const shouldResolve = Math.random() > 0.3;
    console.log(amount);
    console.log(delay);
    console.log(step);
    for (let i = 0; i < amount; i += 1) {
      console.log(i);
      position += 1;
      delay += step;
      setTimeout(
        () => {
          delay += step;
          if (shouldResolve) {
            return onSucces({ position, delay });
          }
          onError({ position, delay });
          // reject(`❌ Rejected promise ${position} in ${delay}ms`);
        },
        delay,
        step
      );
    }
  });
}

createPromise().then(onSucces).catch(onError);

function onSucces({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
