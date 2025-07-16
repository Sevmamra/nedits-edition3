document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const inputs = form.querySelectorAll('input, textarea');
  const submitBtn = form.querySelector('button');
  const messageBox = document.createElement('div');

  messageBox.className = 'form-message';
  form.appendChild(messageBox);

  // ========== Validate Fields ==========
  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateForm = () => {
    let valid = true;
    inputs.forEach(input => {
      const value = input.value.trim();
      if (!value) valid = false;
      if (input.type === "email" && !isValidEmail(value)) valid = false;
    });
    return valid;
  };

  // ========== Show Feedback ==========
  const showMessage = (msg, isSuccess = true) => {
    messageBox.textContent = msg;
    messageBox.style.color = isSuccess ? '#2ecc71' : '#e74c3c';
    messageBox.style.marginTop = '10px';
    messageBox.style.fontWeight = '600';
    messageBox.style.transition = 'all 0.3s ease-in-out';
  };

  // ========== Submit Handler ==========
  form.addEventListener('submit', (e) => {
    if (!validateForm()) {
      e.preventDefault();
      showMessage("❌ Please fill all fields correctly.", false);
      return;
    }

    showMessage("⏳ Sending message...");
    submitBtn.disabled = true;

    // Reset form after submission delay
    setTimeout(() => {
      showMessage("✅ Message sent successfully!", true);
      inputs.forEach(i => i.value = '');
      submitBtn.disabled = false;
    }, 3000);
  });
});
