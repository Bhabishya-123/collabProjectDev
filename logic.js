document.getElementById('contactForm').addEventListener('submit', function(event) {
 // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required.';
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }

    // Validate phone (optional)
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\+?\d{0,13}$/; // Simplified pattern for example
    if (phone && !phonePattern.test(phone)) {
        isValid = false;
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
    }
});

// Real-time validation feedback (optional)
document.getElementById('name').addEventListener('input', function() {
    document.getElementById('nameError').textContent = '';
});
document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailError').textContent = '';
});
document.getElementById('phone').addEventListener('input', function() {
    document.getElementById('phoneError').textContent = '';
});