const refs = {
   box: document.querySelector('#controls'),
   input: document.querySelector('input'),
   addBtn: document.querySelector('[data-action="render"]'),
   destroyBtn: document.querySelector('[data-action="destroy"]'),
   boxes: document.querySelector('#boxes')
}

refs.input.addEventListener('input', onInput);
refs.input.addEventListener('blur', onBlur);
refs.addBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

refs.boxes.style.height = 'auto';

let amount;
function onInput(event) {
   amount = Number(event.currentTarget.value);
   console.log(amount);
   return amount;
};

function onBlur(event) {
   event.currentTarget.value = '';
};

 function getColor() {
      const r = Math.floor(Math.random() * (255));
      const g = Math.floor(Math.random() * (255));
      const b = Math.floor(Math.random() * (255));
      const color = `rgb(${r}, ${g}, ${b})`;
      return color;
};

function boxesSize() {
   let size = 30;
   for (let i = 0; i < newBoxes.length; i += 1){
    
      if (newBoxes[i] === newBoxes[0]) {
         size = size;  
      } size += 10;
   }
   return size;
};

const clearBoxes = () => refs.boxes.innerHTML = '';

const newBoxes = [];
function createBoxes() {
   newBoxes.length = 0;
   clearBoxes();
   for (let i = 0; i < amount; i += 1) {
      const div = document.createElement('div');

      div.style.backgroundColor = getColor();
      div.style.height = `${ boxesSize() }px`;
      div.style.width = `${boxesSize()}px`;
      
      newBoxes.push(div);   
   };
   boxesSize();
   getColor();
  
   refs.boxes.append(...newBoxes);
};

function destroyBoxes() {
   refs.boxes.innerHTML = '';
}

