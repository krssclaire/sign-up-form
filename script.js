const pwdInput = document.querySelector('#password');
const confirmPwdInput = document.querySelector('#confirm-password');
const inputs = document.querySelectorAll('input[type="password"]');

confirmPwdInput.addEventListener('input', checkPassword);

confirmPwdInput.addEventListener('blur', () => {
    if (confirmPwdInput.value === pwdInput.value) {
        confirmPwdInput.style.borderColor = 'rgb(206, 204, 204)';
    } else {
        confirmPwdInput.style.borderColor = 'rgb(195, 20, 20)';
    }
});

function checkPassword() {
    if (confirmPwdInput == document.activeElement) {
        if (confirmPwdInput.value === pwdInput.value) {
            confirmPwdInput.style.borderColor = 'rgb(19, 161, 6)';
        } else {
            confirmPwdInput.style.borderColor = 'rgb(195, 20, 20)';
        }
    }
}