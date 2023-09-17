const form = document.querySelector('.login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const userData = {
    username: 'your_registered_username',
    password: 'your_registered_password'
};

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === userData.username && password === userData.password) {
        alert('Login successful! Welcome, ' + userData.username + '!');
    } else {
        alert('Invalid username or password.'); 
    }
});
