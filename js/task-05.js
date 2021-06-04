const inputField = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputField.addEventListener('input', onFormInput);

function onFormInput(event) {
    outputText.textContent = event.currentTarget.value;
};




