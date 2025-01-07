// Toggle to Signup Form
// document.getElementById('signup-page-link').addEventListener('click', function(event) {
//     event.preventDefault();
//     let loginCon = document.getElementById('login');
//     let signCon = document.getElementById('signupcontainer');
//     loginCon.style.display = 'none';
//     signCon.style.display = 'block';
// });

// // Toggle to Login Form
// document.getElementById('login-page-link').addEventListener('click', function(event) {
//     event.preventDefault();
//     let loginCon = document.getElementById('login');
//     let signCon = document.getElementById('signupcontainer');
//     loginCon.style.display = 'block';
//     signCon.style.display = 'none';
// });

// if (!email.endsWith('@eminds.ai')) {
//     emailError.textContent = 'Email must end with @eminds.ai';
//     isValid = false;
// }





document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector(".signup");
  const loginForm = document.querySelector(".login-form");
  const signupPageLink = document.getElementById("signup-page-link");
  const loginPageLink = document.getElementById("login-page-link");
  const loginContainer = document.getElementById("login");
  const signupContainer = document.getElementById("signupcontainer");
  const welcomeScreen = document.getElementById("welcomeScreen");
  const welcomeMessage = document.getElementById("welcomeMessage");

  // Show signup form
  signupPageLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginContainer.style.display = "none";
    signupContainer.style.display = "block";
  });

  // Show login form
  loginPageLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupContainer.style.display = "none";
    loginContainer.style.display = "block";
  });

  // Function to reset form fields
  const resetFormFields = (form) => {
    form.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  };

  // Signup form submission
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email1").value.trim();
    const password = document.getElementById("password1").value;
    const confirmPass = document.getElementById("confirmPass").value;

    // Validations
    const emailRegex = /^[^\s@]+@eminds\.ai$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

    if (!emailRegex.test(email)) {
      alert("Email must end with @eminds.ai");
      return;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters long, contain letters, numbers, and at least one symbol, and have no spaces.");
      return;
    }

    if (password !== confirmPass) {
      alert("Passwords do not match.");
      return;
    }

    // Store user details in localStorage
    localStorage.setItem("user", JSON.stringify({
      email,
      password,
      firstName,
      lastName,
    }));

    alert(`User registration successful with email: ${email}`);

    // Reset form fields
    resetFormFields(signupForm);

    // Redirect to login page
    signupContainer.style.display = "none";
    loginContainer.style.display = "block";
  });

  // Login form submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Retrieve user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      // Reset form fields
      resetFormFields(loginForm);

      // Navigate to welcome screen
      loginContainer.style.display = "none";
      welcomeScreen.style.display = "block";
      welcomeMessage.textContent = `Welcome ${storedUser.email}`;
    } else {
      alert("Incorrect email or password. Please try again.");
    }
  });
});
