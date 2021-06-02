const totalTopicsNumber = document.querySelectorAll('.item').length;
console.log(`В списке ${totalTopicsNumber} категории.`);

const itemCategories = document.querySelectorAll('.item');

itemCategories.forEach(idx => {
    const categoryText = idx.firstElementChild;
    const categoryList = idx.lastElementChild;
    const numberOfItems = categoryList.querySelectorAll('li').length;

    console.log(`Категория: ${categoryText.textContent}`);
    console.log(`Количество элементов: ${ numberOfItems }`);
});

