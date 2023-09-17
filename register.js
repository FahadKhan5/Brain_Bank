document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registration-form');
    const registerButton = document.getElementById('register-button');
    const loginButton = document.getElementById('login-button');
    const usernameDisplay = document.getElementById('username-display');

    const userData = {};

    registerButton.addEventListener('click', function(event) {
        event.preventDefault();

        const username = form.username.value;
        const email = form.email.value;
        const age = form.age.value;
        const gender = form.gender.value;
        const password = form.password.value;
        const confirmPassword = form['confirm-password'].value;

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        userData.username = username;
        userData.email = email;
        userData.age = age;
        userData.gender = gender;
        userData.password = password; // Store the password

        alert('Registration successful!');
        form.reset();

        
        window.location.href = 'login.html';
    });

    loginButton.addEventListener('click', function() {
        const enteredUsername = form.username.value;
        const enteredPassword = form.password.value;

        if (userData.username && enteredUsername === userData.username && enteredPassword === userData.password) {
            alert('Login successful! Welcome, ' + userData.username + '!');
        } else {
            alert('Invalid username or password.');
        }
    });

    form.addEventListener('submit', function(event) {
        if (userData.username) {
            usernameDisplay.textContent = 'Hello, ' + userData.username;
        }
    });
});
