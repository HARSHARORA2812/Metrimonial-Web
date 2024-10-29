document.addEventListener('DOMContentLoaded', function() {
    const authButton = document.getElementById('auth-button');
    const profileInfo = document.getElementById('profile-info');

    function updateAuthButtonAndProfile() {
        const userData = JSON.parse(localStorage.getItem('currentUser'));
        if (userData) {
            authButton.textContent = 'Logout';
            const profileHTML = `
                <img src="${userData.image}" alt="${userData.username}'s profile picture" style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 20px;">
                <p><strong>Username:</strong> ${userData.username}</p>
                <p><strong>Full Name:</strong> ${userData.fullname}</p>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>DOB:</strong> ${userData.dob}</p>
                <p><strong>Gender:</strong> ${userData.gender || 'Not specified'}</p>
                <p><strong>Occupation:</strong> ${userData.occupation}</p>
                <p><strong>Education:</strong> ${userData.education}</p>
                <p><strong>Location:</strong> ${userData.location}</p>
                <p><strong>Height:</strong> ${userData.height}</p>
                <p><strong>Religion:</strong> ${userData.religion}</p>

            `;

            profileInfo.innerHTML = profileHTML;
        } else {
            authButton.textContent = 'Login/Register';
            profileInfo.innerHTML = '<p>Please log in to view your profile.</p>';
        }
    }
   
    authButton.addEventListener('click', function() {
        const userData = JSON.parse(localStorage.getItem('currentUser'));

        if (userData) {
            localStorage.removeItem('currentUser');
            alert('You have been logged out.');
        } else {
            window.location.href = '../Login/Register.html'; 
        }

        updateAuthButtonAndProfile();
    });

    updateAuthButtonAndProfile();
});