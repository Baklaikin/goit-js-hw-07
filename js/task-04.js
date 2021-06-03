const counterValue = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let total = 0;

const incrementFn = function () {
    total += 1;
    counterValue.textContent = total;
    return total;
}

const decrementFn = function () {
    total -= 1;
    counterValue.textContent = total;
    return total;
}

incrementButton.addEventListener('click', incrementFn);
decrementButton.addEventListener('click', decrementFn);
