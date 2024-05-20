const categoryNames = document.querySelectorAll('h2');
console.log(`Quantity of categories: ${categoryNames.length}`);
let categoryList = document.querySelectorAll('ul ul');
categoryList = Array.from(categoryList);
const arrCategoryLength = categoryList.map(el => el.querySelectorAll('li').length);
arrCategoryLength.forEach((el, index) => {
    console.log(`Categories: ${categoryNames[index].textContent}`);
    console.log(`Elements: ${el}`);
});