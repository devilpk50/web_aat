document.addEventListener("DOMContentLoaded", function () {
  // Hide Sign in button only on login page
  const signinBtn =
    document.querySelector('.signin-btn') ||           // class
    document.querySelector('#signupin') ||             // id
    document.querySelector('a[href*="signin"]');        // link

  if (signinBtn) {
    signupBtn.style.display = 'none';
  }
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  errorMsg.textContent = "";

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  // Password length
  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters long.";
    return;
  }

  // Password match
  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  // Phone number validation (10 digits)
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    errorMsg.textContent = "Phone number must be 10 digits.";
    return;
  }

  alert("Form validated successfully!");
  // this.submit(); // uncomment when backend is ready
});
