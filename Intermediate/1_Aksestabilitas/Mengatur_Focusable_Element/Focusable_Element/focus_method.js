document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const form = document.getElementById('demoForm');
  const focusButton = document.getElementById('focusButton');
  const errorMessage = document.getElementById('nameError');

  // Contoh 1: Manual focus using button
  focusButton.addEventListener('click', () => {
    nameInput.focus();
  });

  // Contoh 2: Automatic focus on validation error
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('error');
      errorMessage.textContent = 'Please enter your name';
      nameInput.focus();
    } else {
      alert('Form submitted successfully!');
      form.reset();
    }
  });

  // Clear error when typing
  nameInput.addEventListener('input', () => {
    nameInput.classList.remove('error');
    errorMessage.textContent = '';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('name');
  const form = document.getElementById('demoForm');
  const focusButton = document.getElementById('focusButton');
  const errorMessage = document.getElementById('nameError');

  // Contoh 1: Manual focus using button
  focusButton.addEventListener('click', () => {
    nameInput.focus();
  });

  // Contoh 2: Automatic focus on validation error
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('error');
      errorMessage.textContent = 'Please enter your name';
      nameInput.focus();
    } else {
      alert('Form submitted successfully!');
      form.reset();
    }
  });

  // Clear error when typing
  nameInput.addEventListener('input', () => {
    nameInput.classList.remove('error');
    errorMessage.textContent = '';
  });
});
