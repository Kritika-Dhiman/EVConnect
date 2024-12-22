const header=document.querySelector("header");
const hamburger=document.querySelector(".hamburger-on");
const navLinks=document.querySelector(".nav-links");
let hamburgerOpen= false;

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>0);
})

hamburger.addEventListener("click",function(){
    if(!hamburgerOpen){
        navLinks.classList.toggle("show-navlinks");
        hamburger.classList.toggle("hamburger-off");
    }else{
        navLinks.classList.remove("show-navlinks");
        hamburger.classList.remove("hamburger-off")
        hamburgerOpen=false;
    }
})

// Show the Sign Up Form and hide the Login Form
function showSignUpForm() {
    document.getElementById("signupFormBox").style.display = "block";
    document.getElementById("loginFormBox").style.display = "none";
  }
  
  // Show the Login Form and hide the Sign Up Form
  function showLoginForm() {
    document.getElementById("signupFormBox").style.display = "none";
    document.getElementById("loginFormBox").style.display = "block";
  }
  
  // Sign Up Form Validation
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
  
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
  
    if (username && email && password) {
      alert('Sign up successful!');
      // Redirect to homepage after successful signup
      window.location.href = '/index.html'; 
    } else {
      alert('Please fill in all fields.');
    }
  });
  
  // Login Form Validation
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    if (username && password) {
      alert('Login successful!');
      // Redirect to homepage after successful login
      window.location.href = '/index.html'; 
    } else {
      alert('Please fill in all fields.');
    }
  });
  