document.addEventListener('DOMContentLoaded', function() {
    const authButton = document.getElementById('auth-button');
    const userData = JSON.parse(localStorage.getItem('currentUser'));

    if (userData) {
        authButton.textContent = 'Logout';
        authButton.onclick = function() {
            localStorage.removeItem('currentUser');
        };
    } else {
        authButton.textContent = 'Login/Register';
    }
})