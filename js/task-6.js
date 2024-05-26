// Перший варіант з append


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// const inputEl = document.querySelector('.number-input');
// const createBtnEl = document.querySelector('[data-create]');
// const destroyBtnEl = document.querySelector('[data-destroy]');
//  let boxWidth = 30;
// let boxHeight = 30;

// inputEl.addEventListener("input", () => {
//   let numberOfBoxes = 0;
//     numberOfBoxes = inputEl.value;
//   if (numberOfBoxes <= 100 && numberOfBoxes > 0) {
//     const arr = [];
//     const divEl = document.querySelector('.boxes');
//     divEl.innerHTML = '';
// for (let i = 0; i < numberOfBoxes; i++){
//   const firstBox = document.createElement('p');
  
// boxWidth += 10;
// boxHeight += 10;
// firstBox.style.width = `${boxWidth}px`;
// firstBox.style.height = `${boxHeight}px`;
//   firstBox.style.backgroundColor = getRandomHexColor();
//   arr.push(firstBox);
// }
   
//     createBtnEl.addEventListener('click', () => { 
//       divEl.append(...arr);
//        {inputEl.value = "";}   
//     }) 
//     destroyBtnEl.addEventListener('click', () => {
//       divEl.remove(arr);
//       inputEl.value = "";
// });
//   } else {inputEl.value = "";}
// });


 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('.number-input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const divEl = document.querySelector('.boxes');
let boxWidth = 30;
let boxHeight = 30;
 let numberUser = 0;
inputEl.addEventListener("input", () => { 
  numberUser = inputEl.value;
  });
createBtnEl.addEventListener('click', () => {
  if (numberUser > 100 || numberUser <= 0) {
    return;
  }
  let row = '';
  for (let i = 0; i < numberUser; i++) {
    row += `<div
    style="width: ${boxWidth}px; height:${boxHeight}px; background-color:${getRandomHexColor()}"></div>`;
       boxWidth += 10;
    boxHeight += 10;
  }
  divEl.innerHTML = row; 
    boxWidth = 30;
boxHeight = 30;
  numberUser = 0;
  inputEl.value = '';
})
   destroyBtnEl.addEventListener('click', () => {
      divEl.innerHTML = '';
      inputEl.value = "";
});

