// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Simple validation
    if (name === '' || email === '' || message === '') {
      displayMessage('Please fill in all fields.', 'danger');
      return;
    }
    
    // Here, you can integrate with a backend service or an email API.
    // For demonstration, we'll just display a success message.
    
    displayMessage('Thank you for your message! I will get back to you soon.', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
  });
  
  // Function to display messages
  function displayMessage(msg, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${msg}</div>`;
    
    // Remove message after 5 seconds
    setTimeout(() => {
      formMessage.innerHTML = '';
    }, 5000);
  }