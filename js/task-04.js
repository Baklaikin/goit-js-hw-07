const total = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const incrementFn = function () {
    counterValue += 1;
    total.textContent = counterValue;
    return counterValue;
}

const decrementFn = function () {
    counterValue -= 1;
    total.textContent = counterValue;
    return counterValue;
}

incrementButton.addEventListener('click', incrementFn);
decrementButton.addEventListener('click', decrementFn);
