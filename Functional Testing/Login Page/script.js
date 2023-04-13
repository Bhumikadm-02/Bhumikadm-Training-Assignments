function validateForm() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');

    if (usernameInput.value.trim() === '' || passwordInput.value.trim() === '') {
        loginButton.disabled = true;
        errorMessage.textContent = '';
        return;
    }

    if (usernameInput.value === 'Admin' && passwordInput.value === '123') {
        loginButton.disabled = false;
        errorMessage.textContent = '';
    } else {
        loginButton.disabled = true;
        errorMessage.textContent = 'Invalid username or password.';
    }
}

function login() {
    alert("Login successful!");
}