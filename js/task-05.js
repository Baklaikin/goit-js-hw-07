const inputField = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputField.addEventListener('input', onFormInput);

function onFormInput(event) {
    if (event.currentTarget.value === '') {
        outputText.textContent = 'незнакомец';
        return;
    }
    outputText.textContent = event.currentTarget.value;
};




