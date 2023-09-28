// script.js
document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('user-input');
  const sendButton = document.getElementById('send-button');
  const errorMessage = document.getElementById('error-message');

  sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();

    if (!validateUserInput(userMessage)) {
      errorMessage.textContent = 'Invalid input. Please enter a valid message.';
      return;
    }

    errorMessage.textContent = ''; // Clear error message
    // ... Continue with sending the message to the backend
  });

  function validateUserInput(input) {
    // Perform input validation (example: non-empty input)
    return input !== '';
  }
});

