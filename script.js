const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPassValue = confirmPassword.value.trim();

    if(usernameValue === "") {
        //show error
        // add error class
        setErrorFor(username, "Username cannot be blank");
    } else {
        //add success class
        setSuccessFor(username);
    }

    if(emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    } else if(!emailVerify(emailValue)){
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === "") {
        setErrorFor(password, "Password cannot be empty");
    } else if(passwordValue.length < 5) {
        setErrorFor(password, "Password Length too short!")
    } else if(passwordValue.length > 15) {
        setErrorFor(password, "Password Length too long!")
    } 
    else {
        setSuccessFor(password);
    }

    if(confirmPassValue === "") {
        setErrorFor(confirmPassword, "Please re-type your password");
    } else if(confirmPassValue !== passwordValue){
        setErrorFor(confirmPassword, "Passwords do not match");
    } else {
        setSuccessFor(confirmPassword);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector("small"); // add error message inside the small

    small.innerText = message;

    // add error class
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control
    // No need to add success message just need to add success class
    formControl.className = "form-control success";
}

function emailVerify(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}