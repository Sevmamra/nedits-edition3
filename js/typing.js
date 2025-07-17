document.addEventListener('DOMContentLoaded', () => {
  const typingEls = document.querySelectorAll('.typing-text');

  typingEls.forEach(el => {
    const text = el.textContent.trim();
    el.textContent = '';
    let index = 0;

    function type() {
      if (index < text.length) {
        el.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50); // Speed of typing
      }
    }

    type();
  });
});
