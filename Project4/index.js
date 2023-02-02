console.log('This is project 4');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
let success = document.getElementById('success');
let failure = document.getElementById('failure');
failure.classList.add("d-none");
success.classList.add("d-none");
// console.log(name, email, phone);

name.addEventListener('blur', () => {
    console.log('name is blurred');
    // Validate name here
    let regex = /^[a-zA-z][0-9a-zA-z]{2,10}$/;
    let str = name.value;
    console.log(regex, str);
    let result = regex.exec(str);
    console.log(result);
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        console.log(`The string "${str}" matches the expression "${regex.source}"`);
        validUser = true;
    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        console.log(`The string "${str}"  does not matches the expression "${regex.source}"`);
        validUser = false;
    }
});

email.addEventListener('blur', () => {
    console.log('email is blurred');
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    let result = regex.exec(str);
    console.log(result);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        console.log(`The string "${str}" matches the expression "${regex.source}"`);
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        console.log(`The string "${str}"  does not matches the expression "${regex.source}"`);
        validEmail = false;
    }
});

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    // Validate phone here
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regex, str);
    let result = regex.exec(str);
    console.log(result);
    if (regex.test(str)) {
        console.log('Your phone no is valid');
        phone.classList.remove('is-invalid');
        console.log(`The string "${str}" matches the expression "${regex.source}"`);
        validPhone = true;
    }
    else {
        console.log('Your phone no is not valid');
        phone.classList.add('is-invalid');
        console.log(`The string "${str}"  does not matches the expression "${regex.source}"`);
        validPhone = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    // Submit your form here
    if(validEmail && validUser && validPhone){
        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.remove("d-none");
        success.classList.add('show');
        failure.classList.add("d-none");
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.remove('d-none');
        failure.classList.add('show');
        success.classList.add("d-none");
    }
})