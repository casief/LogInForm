document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === '1234') {
            form.submit();
        } else {
            errorMessage.textContent = 'Wrong username or password. Please try again.';
        }
    });
});