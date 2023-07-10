function showLoginForm() {
    var loginFormContainer = document.getElementById("loginFormContainer");
    var loginForm = document.getElementById("loginForm");
    
    loginFormContainer.classList.toggle("visible");
    loginForm.classList.toggle("visible");
    
    if (loginFormContainer.classList.contains("visible")) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
  }


