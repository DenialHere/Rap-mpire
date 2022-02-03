let email = /^([a-z\.\d]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2.8})?$/;
inputEmail = document.getElementById('email');
singup = document.getElementById('signup');


signup.addEventListener('click', validateEmail);

function validateEmail (){
    if(email.test(inputEmail.value)){
        alert('Your have signed up for our newsletter.');
    }
    else {
        alert('Invaild email address.');
        event.preventDefault();
    }

}