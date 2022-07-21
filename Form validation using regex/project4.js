console.log('This is project 4');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validName;
let validMail;
let validPhone;

// console.log(name)
// console.log(email)
// console.log(phone)

name.addEventListener('blur', () => {
    //validate name here
    let regex = /^[a-zA-Z]([a-zA-Z0-9\@]){3,11}$/;
    let strName = name.value;
    validName = regex.test(strName);
    if (validName) {
        console.log('Your name is valid!');

        name.classList.remove('is-invalid');

    }
    else {
        console.log('Your name is not valid!');
        name.classList.add('is-invalid');
    }
})

email.addEventListener('blur', () => {
    //validate email here
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}/;
    let strMail = email.value;
    validMail = regex.test(strMail);

    if (validMail) {
        console.log('Your email is valid!');

        email.classList.remove('is-invalid');

    }
    else {
        console.log('Your email is not valid!');
        email.classList.add('is-invalid');
    }
})

phone.addEventListener('blur', () => {
    //validate phone here
    let regex = /^[1-9][0-9]{9}$/;
    let strPhone = phone.value;
    validPhone = regex.test(strPhone);

    if (validPhone) {
        console.log('Your phone is valid!');

        phone.classList.remove('is-invalid');

    }
    else {
        console.log('Your phone is not valid!');
        phone.classList.add('is-invalid');
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('You clicked on submit button');
    // let success = document.getElementById('success');


    if (validMail && validName && validPhone) {
        console.log('true');
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Success!</strong> Your form has been successfully submitted.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>`

        //  success.classList.add('show');
        setTimeout(() => {
            // success.classList.remove('show');

            message.innerHTML = ``;
        }, 3000);

        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let phone = document.getElementById('phone');
        let address = document.getElementById('address');
        let otherMessage = document.getElementById('otherMessage');

        name.value = '';
        email.value = '';
        phone.value = '';
        address.value = '';
        otherMessage.value = '';


    }
    else {
        // failure.classList.add('show');
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> Your form has not submitted due to some error.
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>`
        setTimeout(() => {
            // failure.classList.remove('show');
            message.innerHTML = ``;
        }, 3000);
        console.log('false');


    }



})



