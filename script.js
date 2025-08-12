document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let isValid = true;

    // Name validation
    if (name === "") {
        showError('name', 'Name is required');
        isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
        showError('name', 'Name can only contain letters and spaces');
        isValid = false;
    } else {
        showError('name', '');
    }

    // Email validation
    if (email === "") {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Invalid email format');
        isValid = false;
    } else {
        showError('email', '');
    }

    // Message validation
    if (message === "") {
        showError('message', 'Message is required');
        isValid = false;
    } else {
        showError('message', '');
    }

    // Success message
    if (isValid) {
        document.getElementById('success').textContent = "Form submitted successfully!";
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('success').textContent = "";
    }
});

function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = inputElement.parentElement.querySelector('.error');
    errorElement.textContent = message;
}
