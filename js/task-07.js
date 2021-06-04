const inputBar = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputBar.addEventListener('input', onRangeChange);

function onRangeChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}

