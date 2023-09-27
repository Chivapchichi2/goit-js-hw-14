'use strict';
const categoriesItemsByClass = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesItemsByClass.length}`);

categoriesItemsByClass.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});