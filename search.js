// Function to handle search
function searchFunction() {
  var searchTerm = document.getElementById('searchBar').value;
  if (searchTerm.trim() !== '') {
    alert('Searching for: ' + searchTerm);
  } else {
    alert('Please enter a search term.');
  }
}

// Function to animate the search button
function animateSearchButton() {
  var button = document.querySelector('.search-container button');
  button.classList.add('animate');
  setTimeout(function() {
    button.classList.remove('animate');
  }, 1000);
}

// Add event listener to search button for animation
document.querySelector('.search-container button').addEventListener('click', function() {
  animateSearchButton();
});

// Function to show/hide login form
function toggleLoginForm() {
  var loginForm = document.querySelector('.login-form');
  loginForm.classList.toggle('show');
}

// Add event listener to login link to toggle login form
document.querySelector('.login-link').addEventListener('click', function(event) {
  event.preventDefault();
  toggleLoginForm();
});

// Add event listener to close button in login form to close form
document.querySelector('.close-btn').addEventListener('click', function() {
  toggleLoginForm();
});
