// const inputEl = document.querySelector('.js-user-name');
// console.log(inputEl);
// inputEl.addEventListener('input', onInputChange);
// function onInputChange() {
    // console.log("ku-ku");
    // const value = inputEl.value;
    // console.log(value);
// }

const inputEl = document.querySelector('input#name-input');
const result = document.querySelector('span#name-output');
inputEl.addEventListener('input', () => {
    const value = inputEl.value;
    console.log(value);
    if (value = '') {
        result = "Anonymous";
    } else {
        result = value.trim();
    }
    });
