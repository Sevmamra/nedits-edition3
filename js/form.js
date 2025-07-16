document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const inputs = form.querySelectorAll('input, textarea');
  const submitBtn = form.querySelector('button');
  const messageBox = document.createElement('div');

  messageBox.className = 'form-message';
  form.appendChild(messageBox);

  // Validate Fields
  const isValidEmail = email => /\S+@\S+\.\S+/.test(email);

  const validateForm = () => {
    let valid = true;
    inputs.forEach(input => {
      if (!input.value.trim()) valid = false;
      if (input.type === "email" && !isValidEmail(input.value)) valid = false;
    });
    return valid;
  };

  // Feedback Message
  const showMessage = (msg, success = true) => {
    messageBox.textContent = msg;
    messageBox.style.color = success ? 'green' : 'red';
    messageBox.style.marginTop = '10px';
    messageBox.style.fontWeight = '600';
  };

  // Handle Submit
  form.addEventListener('submit', (e) => {
    if (!validateForm()) {
      e.preventDefault();
      showMessage("Please fill all fields correctly.", false);
      return;
    }

    showMessage("Sending message...");
    submitBtn.disabled = true;

    // Auto-clear feedback message after a delay
    setTimeout(() => {
      submitBtn.disabled = false;
      showMessage("Message sent successfully!", true);
      inputs.forEach(i => i.value = '');
    }, 3000);
  });
});
