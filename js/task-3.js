// const inputEl = document.querySelector('.js-user-name');
// console.log(inputEl);
// inputEl.addEventListener('input', onInputChange);
// function onInputChange() {
    // console.log("ku-ku");
    // const value = inputEl.value;
    // console.log(value);
// }

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input', () => {
    if (inputEl.value.trim()) {
        spanEl.textContent = inputEl.value; 
        } else {
        spanEl.textContent = "Anonymous";
    }
    });
