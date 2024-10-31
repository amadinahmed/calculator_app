// Function Declaration: Check eligibility to drive
function checkEligibility(name, age) {
    let eligibilityMessage = '';

    if (age >= 18) {
        eligibilityMessage = `Yes, ${name}! You are over 18 and eligible to drive.`;
    } else {
        eligibilityMessage = `Sorry, ${name}. You are under 18 and not eligible to drive yet.`;
    }

    return eligibilityMessage;
}

// Function to display the message on the webpage
function displayMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;

    // Remove existing classes
    messageDiv.classList.remove('error', 'success');

    // Add the new class based on the message type
    if (type === 'error') {
        messageDiv.classList.add('error');
    } else if (type === 'success') {
        messageDiv.classList.add('success');
    }
}

// Function to handle the eligibility check
function handleEligibilityCheck() {
    // Get input values and trim any extra whitespace
    const nameInput = document.getElementById('name').value.trim();
    const ageInput = parseInt(document.getElementById('age').value.trim(), 10);

    // Validate inputs
    if (nameInput === '' || isNaN(ageInput)) {
        displayMessage('Please enter a valid name and age.', 'error');
        return;
    }

    // Get the eligibility message
    const eligibilityMessage = checkEligibility(nameInput, ageInput);

    // Determine message type based on eligibility
    const messageType = ageInput >= 18 ? 'success' : 'error';

    // Display the message
    displayMessage(eligibilityMessage, messageType);

    // Optionally, clear the input fields
    // document.getElementById('name').value = '';
    // document.getElementById('age').value = '';
}

// Attach event listener to the button
document.getElementById('check-button').addEventListener('click', handleEligibilityCheck);
