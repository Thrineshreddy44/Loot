document.getElementById('createAccountBtn').addEventListener('click', function() {
    const emailInput = document.querySelector('#account-form input[type="email"]');
    const passwordInput = document.querySelector('#account-form input[type="password"]');
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check email format is valid
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    // Get registered users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};

    if (registeredUsers[email]) {
        alert('You already have an account with this email!');
    } else {
        // Store
        registeredUsers[email] = password;
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        alert('Account created successfully!');
        document.getElementById('account-form').reset();
    }
});
