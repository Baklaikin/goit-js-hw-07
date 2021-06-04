const inputField = document.querySelector('#validation-input');
const correctInputLength = Number(inputField.getAttribute('data-length'));
inputField.addEventListener('change', onBlurEvent);


function onBlurEvent(event) {
    if (event.currentTarget.value.length === correctInputLength) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    } else if (event.currentTarget.value.length < correctInputLength || event.currentTarget.value.length > correctInputLength) {
        inputField.classList.add('invalid');
    }
};

