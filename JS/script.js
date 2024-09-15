
const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const button = document.getElementsByTagName('button')[0];
const errUserName = document.getElementsByTagName('small')[0];
const errEmail = document.getElementsByTagName('small')[1];
const errPassword = document.getElementsByTagName('small')[2];
const errConfirmPassword = document.getElementsByTagName('small')[3];
const view = document.getElementsByTagName('span')[0];
const view2 = document.getElementsByTagName('span')[1];

let [flag1, flag2, flag3, flag4] = Array(4).fill(false);


button.addEventListener('click', () => {
    form.addEventListener('submit', (e) => {
        
        isEmpty();
        
        if(!(flag1 && flag2 && flag3 && flag4)){
            e.preventDefault();
        }
    });
})

function isEmpty(){
    if(!userName.value.length){
        errUserName.innerHTML = 'username must be filled';
        userName.style.border = '2px solid red';
    } else {
        validateUserName();
    }
    if(!email.value.length){
        errEmail.innerHTML = 'email must be filled';
        email.style.border = '2px solid red';
    } else {
        validateEmail();
    }
    if(!password.value.length){
        errPassword.innerHTML = 'password must be filled';
        password.style.border = '2px solid red';
    } else {
        validatePassword();
    }
    if(!confirmPassword.value.length){
        errConfirmPassword.innerHTML = 'confirm password must be filled';
        confirmPassword.style.border = '2px solid red';
    } else {
        matchConfirmPassword();
    }
}

function validateUserName(){
    if(userName.value.length >= 5 && userName.value.length <= 10){
        const userNamePattern = /^[a-zA-Z]+$/;
        if(userNamePattern.test(userName.value)){
            userName.style.border = '2px solid lightgreen';
            errUserName.innerHTML = '';
            flag1 = true;
        } else {
            errUserName.innerHTML = 'username should only have alphabets';
            userName.style.border = '2px solid red';
        }
    } else{
        errUserName.innerHTML = 'username must have 5-10 alphabets';
        userName.style.border = '2px solid red';
    }
}


const validateEmail = function(){
    const emailPattern =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    email.value = email.value.lowercase();
    if(emailPattern.test(email.value)){
        errEmail.innerHTML = '';
        email.style.border = '2px solid lightgreen';
        email.style.background = 'white';
        flag2 = true;
    } else {
        errEmail.innerHTML = 'email format is not correct';
        email.style.border = '2px solid red';
    }

}


const validatePassword = () => {
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
    
    if(passwordPattern.test(password.value)){
        password.style.border = '2px solid lightgreen';
        errPassword.innerHTML = '';
    } else {
        errPassword.innerHTML = 'password should have 8-10 characters <br> password must include atleast 1 uppercase, 1 lowercase, <br>special character !@#$%^&*';
        password.style.border = '2px solid red';
    }
}


const matchConfirmPassword = () => {
    if(password.value === confirmPassword.value){
        confirmPassword.style.border = '2px solid lightgreen';
        errConfirmPassword.innerHTML = '';
    } else {
        confirmPassword.style.border = '2px solid red';
        errConfirmPassword.innerHTML = 'password does not match';
    }
}


view.addEventListener('click', () => {
    password.setAttribute('type', '');
})
view2.addEventListener('click', () => {
    confirmPassword.setAttribute('type', '');
})