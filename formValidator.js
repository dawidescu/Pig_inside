

// Select all the input elements and the form
const inputs = document.querySelectorAll('input, select, textarea');
const form = document.querySelector('form');

// Regular expressions for validation
const nameRegex = /^[a-zA-Z]{2,25}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Function to validate an input
function validateInput(input) {
  let valid = true;
  let message = '';

  // Check if the input is required and if it's empty
  if (input.hasAttribute('required') && input.value.trim() === '') {
    valid = false;
    message = 'Wypełnij to pole, chrumko';
  }

  // Check if the input is a name and if it's valid
  if (input.name === 'firstname' || input.name === 'lastname') {
    if (!nameRegex.test(input.value)) {
      valid = false;
      message = 'Wpisz prawidłowe imię lub nazwisko';
    }
  }

  // Check if the input is an email and if it's valid
  if (input.name === 'email') {
    if (!emailRegex.test(input.value)) {
      valid = false;
      message = 'Wpisz prawidłowy adres e-mail';
    }
  }

  // Show or hide the error message
  const errorMessage = input.nextElementSibling;
  errorMessage.textContent = message;
  errorMessage.style.display = valid ? 'none' : 'block';

  return valid;
}

// Validate the form on submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let formIsValid = true;

  // Validate all the inputs
  for (const input of inputs) {
    const inputIsValid = validateInput(input);
    if (!inputIsValid) {
      formIsValid = false;
    }
  }

  // If the form is valid, submit it
  if (formIsValid) {
    form.submit();
  }
});




