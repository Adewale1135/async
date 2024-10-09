document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Required fields validation
    const requiredFields = ['name', 'email', 'password', 'confirmPassword', 'age', 'gender', 'country', 'terms'];
    requiredFields.forEach(field => {
        if (!document.getElementById(field).value) {
            valid = false;
            alert(`${field} is required`);
        }
    });

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        valid = false;
        alert('Please enter a valid email address');
    }

    // Password validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password.length < 8) {
        valid = false;
        alert('Password must be at least 8 characters long');
    }
    if (password !== confirmPassword) {
        valid = false;
        alert('Passwords do not match');
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (age < 18 || age > 100) {
        valid = false;
        alert('Please enter a valid age between 18 and 100');
    }

    // Terms and conditions validation
    if (!document.getElementById('terms').checked) {
        valid = false;
        alert('You must agree to the terms and conditions');
    }

    if (valid) {
        alert('Registration successful');
        // Here you can add code to submit the form data to the server
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add login validation logic here
    alert('Login successful');
});
