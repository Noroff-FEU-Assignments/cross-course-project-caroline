const url = "https://www.pixilates.no/wp-json/wc/store/products?consumer_key=ck_9a8fecccac526424fc8897fe3346b592221bc21e&consumer_secret=cs_c9886fee52662a04e6dd6474bdac6551af80c82e";

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


/* Products */

const container = document.querySelector(".popular-products")

async function getProducts(){
    try{
        const response = await fetch(url);
        const results = await response.json();
        createHTML(results);

        console.log(results)
        }

    catch(error){
        console.log(error);
    }
}

getProducts();

function createHTML(products){
    products.forEach(function(product){
        container.innerHTML += 
        `<a href="game-page.html">
              <div class="img"><img src="${product.images[0].src}" alt=""/></div>
          </a>
              <div class="game-container">
                  <div class="title"><h3>${product.name}</h3></div>
                  <div class="price">${product.prices.price}</div>
                  <button class="cart-button">Add to Cart</button>
                  <div class="condition">Condition:</div>
                  <div class="condition-var">New</div>
              </div>
              </div>`;
    })
};

