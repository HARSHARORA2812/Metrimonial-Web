document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('form');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();


        const userData = {
            username: document.getElementById('Username').value,
            image: document.getElementById('image').value,
            fullname: document.getElementById('Fullname').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            dob: document.getElementById('dob').value,
            gender: document.getElementById('gender').value,
            occupation: document.getElementById('occupation').value,
            education: document.getElementById('education').value,
            location: document.getElementById('location').value,
            height: document.getElementById('height').value,
            religion: document.getElementById('religion').value
        };


        localStorage.setItem('currentUser', JSON.stringify(userData));

        window.location.href = '../Profile/index.html';



    });
});

