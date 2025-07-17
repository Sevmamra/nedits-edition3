document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return; // Safe check for pages without form

  const inputs = form.querySelectorAll('input, textarea');
  const submitBtn = form.querySelector('button');
  const messageBox = document.querySelector('.form-message');

  // Validate Email Format
  const isValidEmail = email => /\S+@\S+\.\S+/.test(email);

  const validateForm = () => {
    let valid = true;

    inputs.forEach(input => {
      input.style.borderColor = '#ddd'; // Reset borders

      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = 'red';
      }

      if (input.type === "email" && !isValidEmail(input.value)) {
        valid = false;
        input.style.borderColor = 'red';
      }
    });

    return valid;
  };

  // Show Message Function
  const showMessage = (msg, success = true) => {
    messageBox.textContent = msg;
    messageBox.className = success ? 'form-message success' : 'form-message error';
    messageBox.setAttribute('role', 'alert');
  };

  // Handle Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showMessage("Please fill all fields correctly.", false);
      return;
    }

    showMessage("Sending message...");
    submitBtn.disabled = true;

    // Simulate Sending
    setTimeout(() => {
      submitBtn.disabled = false;
      showMessage("Message sent successfully!", true);
      inputs.forEach(i => i.value = '');
    }, 2000);
  });
});
