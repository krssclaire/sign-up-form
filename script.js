const pwdInput = document.querySelector('#password');
const confirmPwdInput = document.querySelector('#confirm-password');
const inputs = document.querySelectorAll('input[type="password"]');

confirmPwdInput.addEventListener('input', () => {
    if (confirmPwdInput.value === pwdInput.value) green();
    else red();
});

confirmPwdInput.addEventListener('blur', () => {
    if (confirmPwdInput.value === pwdInput.value) grey();
    else red();
});

const green = () => confirmPwdInput.style.borderColor = 'rgb(19, 161, 6)';
const red = () => confirmPwdInput.style.borderColor = 'rgb(195, 20, 20)';
const grey = () => confirmPwdInput.style.borderColor = 'rgb(206, 204, 204)';