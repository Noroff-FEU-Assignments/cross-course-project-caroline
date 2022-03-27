const form = document.querySelector(".form-all");

const fullname = document.querySelector(".fullname")
const message = document.querySelector(".message")
const email = document.querySelector(".email")

const fullnameError = document.querySelector(".fullname-error")
const messageError = document.querySelector(".message-error")
const emailError = document.querySelector(".email-error")

const cartCount = document.querySelector(".counter")
const cartButton = document.querySelector(".cart-button")

/* Form Validation */

function validateForm () {
    event.preventDefault();

    if(lengthValidation(fullname.value, 0) === true) {
        fullnameError.style.display = "none";
    } else {
        fullnameError.style.display = "block";
    }

    if (lengthValidation(message.value, 20) === true) {
        messageError.style.display = "none";
    } else { 
        messageError.style.display = "block";
    }

    if (emailValidation(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm);

function lengthValidation(value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;

}


/* Cart function */

cartButton.onclick = function() {
    count += 1;
    cartCount.innerHTML = 0 + count;
}; 


