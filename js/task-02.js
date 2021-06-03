const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const items = ingredients.map(value => {
  const li = document.createElement('li');
  li.textContent = value;
  return li;
})

ingredientsList.append(...items);