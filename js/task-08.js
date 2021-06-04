const refs = {
   box: document.querySelector('#controls'),
   input: document.querySelector('input'),
   addBtn: document.querySelector('[data-action="render"]'),
   destroyBtn: document.querySelector('[data-action="destroy"]')
}

refs.input.addEventListener('submit', onSubmit);

console.log(refs.destroyBtn);