document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
  
    console.log("Form Submitted:", name, email, message);
  
    alert("Your message has been sent!");
  });
  