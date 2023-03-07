// opening - closing menu

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuList = document.querySelector('.menu__list'),
      overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuList.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

// ratings section

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// Form Validation

const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();

    if(nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }
    
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    } else {
        setSuccess(email);
    }
}

// Smooth anchor scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

const pageUp = document.querySelector(".pageup");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
        pageUp.classList.add("active");
    } else {
        pageUp.classList.remove("active");
    }
    pageUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
});

// form mailer 