function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");


buttonEl.addEventListener("click", onBtnElClick);
function onBtnElClick() {
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  spanEl.style.color = randomColor;
}
