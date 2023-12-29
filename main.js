document.addEventListener("DOMContentLoaded", () => {
  //dark mode 
  const darkModeButton = document.getElementById('sun-moon-icon');
  const body = document.body;

  darkModeButton.addEventListener('click', () => {
    // Toggle between symbols
    if (darkModeButton.textContent === '☀︎') {
      darkModeButton.textContent = '🌜';
    } else {
      darkModeButton.textContent = '☀︎';
    }
    body.classList.toggle('dark-mode');
  });
  /*
    //clear form after submit
    const form = document.getElementById("web3form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      // Reset the form
      form.reset();
    });
  */
});