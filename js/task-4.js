const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', myForm);

function myForm(evt) {
    evt.preventDefault();
    let isValid = false;
    let inputArr = document.querySelectorAll('login-form input')
    inputArr = Arr.from(inputArr);
    inputArr.forEach(input => {
        if (input.value) {
            isValid = true;
        } else {
            isValid = false;
        }        
    });
    if (!isValid) {
        alert('All form fields must be filled in')
    }
    let UserEmail = formEl.elements[0].value;
    let UserPassword = formEl.elements[1].value;
    let formObj = {
        email: UserEmail,
        password: UserPassword,
    };
    formEl.reset();
    return console.log(formObj);
}