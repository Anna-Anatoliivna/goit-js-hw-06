function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('.number-input');
const createBtnEl = document.querySelector('.create-btn');
const destroyBtnEl = document.querySelector('.destroy-btn');
 let boxWidth = 30;
let boxHeight = 30;

inputEl.addEventListener("input", () => {
  let numberOfBoxes = inputEl.value;
  if (numberOfBoxes <= 100) {
    const arr = [];
const divEl = document.querySelector('.boxes');
for (let i = 0; i < numberOfBoxes; i++){
  const firstBox = document.createElement('p');
 
boxWidth += 10;
boxHeight += 10;
firstBox.style.width = `${boxWidth}px`;
firstBox.style.height = `${boxHeight}px`;
  firstBox.style.backgroundColor = getRandomHexColor();
  arr.push(firstBox);
}
    createBtnEl.addEventListener('click', () => { 
      divEl.append(...arr);
       {inputEl.value = "";}   
    }) 
    destroyBtnEl.addEventListener('click', () => {
      divEl.remove(arr);
      inputEl.value = "";
});
  } else {inputEl.value = "";}
});






