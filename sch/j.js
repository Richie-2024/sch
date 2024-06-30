document.addEventListener('DOMContentLoaded', function() {
  // Totals for each category
  let totalExpenditures = 0;
  let totalIncome = 0;
  let totalOthers = 0;

  // Form submission event listeners
  document.getElementById('expenditure-form').addEventListener('submit', function(event) {
      event.preventDefault();
      addRecord('expenditure');
  });

  document.getElementById('income-form').addEventListener('submit', function(event) {
      event.preventDefault();
      addRecord('income');
  });

  document.getElementById('other-form').addEventListener('submit', function(event) {
      event.preventDefault();
      addRecord('other');
  });

  function addRecord(type) {
      const nameInput = document.getElementById(`${type}-name`);
      const amountInput = document.getElementById(`${type}-amount`);

      if (nameInput.value.trim() !== '' && amountInput.value.trim() !== '') {
          const list = document.getElementById(`${type}-list`);
          const listItem = document.createElement('li');
          const amount = parseFloat(amountInput.value);
          listItem.textContent = `${nameInput.value} - UGX ${amount.toFixed(2)}`;
          list.appendChild(listItem);

          if (type === 'expenditure') {
              totalExpenditures += amount;
              updateTotal('expenditure-total', totalExpenditures);
          } else if (type === 'income') {
              totalIncome += amount;
              updateTotal('income-total', totalIncome);
          } else if (type === 'other') {
              totalOthers += amount;
              updateTotal('other-total', totalOthers);
          }

          nameInput.value = '';
          amountInput.value = '';
      }
  }

  function updateTotal(elementId, total) {
      const totalElement = document.getElementById(elementId);
      if (!totalElement) {
          const section = document.querySelector(`#${elementId.split('-')[0]} section`);
          const totalDisplay = document.createElement('p');
          totalDisplay.id = elementId;
          totalDisplay.textContent = `Total: UGX ${total.toFixed(2)}`;
          section.appendChild(totalDisplay);
      } else {
          totalElement.textContent = `Total: UGX ${total.toFixed(2)}`;
      }
  }
});

// login page
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');
    const signInContainer = document.querySelector('.sign-in-container');
    const signUpContainer = document.querySelector('.sign-up-container');
  
    switchToSignup.addEventListener('click', function(event) {
      event.preventDefault();
      signInContainer.classList.remove('active');
      signUpContainer.classList.add('active');
    });
  
    switchToLogin.addEventListener('click', function(event) {
      event.preventDefault();
      signUpContainer.classList.remove('active');
      signInContainer.classList.add('active');
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
  
      // Simple hardcoded validation for demo purposes
      if (email === 'user@example.com' && password === 'password') {
        // Redirect to Business Record Keeping System page
        window.location.href = 'index.php';
      } else {
        alert('Invalid login credentials.');
      }
    });
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Handle sign-up logic here
      alert('Sign-up successful!');
      // Automatically switch to login form after successful sign-up
      signUpContainer.classList.remove('active');
      signInContainer.classList.add('active');
    });
  });
  //signup
  document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const switchToSignup = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');
    const signInContainer = document.querySelector('.sign-in-container');
    const signUpContainer = document.querySelector('.sign-up-container');
  
    switchToSignup.addEventListener('click', function(event) {
      event.preventDefault();
      signInContainer.classList.remove('active');
      signUpContainer.classList.add('active');
    });
  
    switchToLogin.addEventListener('click', function(event) {
      event.preventDefault();
      signUpContainer.classList.remove('active');
      signInContainer.classList.add('active');
    });
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
  
      // Retrieve users from local storage
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Check if credentials exist in local storage
      const foundUser = users.find(user => user.email === email && user.password === password);
  
      if (foundUser) {
        // Redirect to Business Record Keeping System page
        window.location.href = 'index.php';
      } else {
        // Do nothing or handle the invalid case in another way (optional)
      }
    });
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('signup-username').value;
      const signupEmail = document.getElementById('signup-email').value;
      const signupPassword = document.getElementById('signup-password').value;
  
      // Retrieve users from local storage
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      // Check if email already exists in local storage
      const existingUser = users.find(user => user.email === signupEmail);
  
      if (existingUser) {
        alert('Email already exists. Please use a different email.');
        return;
      }
  
      // Create new user object
      const newUser = {
        username: username,
        email: signupEmail,
        password: signupPassword
      };
  
      // Save user to local storage
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
  
      // Automatically switch to login form after successful sign-up
      signUpContainer.classList.remove('active');
      signInContainer.classList.add('active');
  
      alert('Sign-up successful! You can now login with your credentials.');
    });
  });
  