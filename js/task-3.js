// const inputEl = document.querySelector('.js-user-name');
// console.log(inputEl);
// inputEl.addEventListener('input', onInputChange);
// function onInputChange() {
    // console.log("ku-ku");
    // const value = inputEl.value;
    // console.log(value);
// }

const inputEl = document.querySelector('.js-user-name');
const result = document.querySelector('h1:last-child');
inputEl.addEventListener('blur', () => {
    const inputEl = inputEl.value;
});
console.log('Hello', 'result');