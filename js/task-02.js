const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const items = [];
const ingredientsItem = ingredients.forEach(value => {
    const item = document.createElement('li');
    item.textContent = value;
    items.push(item);
});

ingredientsList.append(...items);
console.log(ingredientsList);
