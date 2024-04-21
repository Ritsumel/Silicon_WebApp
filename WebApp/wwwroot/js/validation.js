document.getElementById('signup-form').addEventListener('submit', function (event) {
    var form = event.target;
    var isValid = true;

    var firstNameInput = form.querySelector('[name="FirstName"]');
    if (!firstNameInput.value.trim()) {
        displayError(firstNameInput, 'First name must be provided');
        isValid = false;
    } else {
        clearError(firstNameInput);
    }

    var lastNameInput = form.querySelector('[name="LastName"]');
    if (!lastNameInput.value.trim()) {
        displayError(lastNameInput, 'Last name must be provided');
        isValid = false;
    } else {
        clearError(lastNameInput);
    }

    var emailInput = form.querySelector('[name="Email"]');
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        displayError(emailInput, 'Enter a valid email address');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    var passwordInput = form.querySelector('[name="Password"]');
    if (!passwordInput.value.trim()) {
        displayError(passwordInput, 'Enter a valid password');
        isValid = false;
    } else if (passwordInput.value.trim().length < 8) {
        displayError(passwordInput, 'Password must be at least 8 characters long');
        isValid = false;
    } else if (!/^[A-Z]/.test(passwordInput.value.trim())) {
        displayError(passwordInput, 'Password must start with a capital letter');
        isValid = false;
    } else if (!/[\W_]/.test(passwordInput.value.trim())) {
        displayError(passwordInput, 'Password must contain at least one special character');
        isValid = false;
    } else {
        clearError(passwordInput);
    }

    var confirmPasswordInput = form.querySelector('[name="ConfirmPassword"]');
    if (!confirmPasswordInput.value.trim() || confirmPasswordInput.value.trim() !== form.querySelector('[name="Password"]').value.trim()) {
        displayError(confirmPasswordInput, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confirmPasswordInput);
    }

    var termsInput = form.querySelector('[name="TermsAndConditions"]');
    if (!termsInput.checked) {
        displayError(termsInput, 'You must accept the terms and conditions to proceed');
        isValid = false;
    } else {
        clearError(termsInput);
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function displayError(input, message) {
    var errorSpan = input.parentElement.querySelector('span');
    errorSpan.innerText = message;
    errorSpan.style.display = 'block';
}

function clearError(input) {
    var errorSpan = input.parentElement.querySelector('span');
    errorSpan.innerText = '';
    errorSpan.style.display = 'none';
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
