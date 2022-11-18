const loadRegistrationPage = (string) => {
    // sessionStorage.setItem('page', 'registration')
    // console.log(location.href.split(location.origin)[1])
    // if(location.href.split(location.origin)[1]=='/index.html?signin=email'){
    //     sessionStorage.setItem('page', 'login_with_mail')
    // }

    if (string == 'from_login') {
        console.log('from_login')
        sessionStorage.setItem('page', 'registration')
    }
    window.history.pushState("", "", `index.html?signup`);
    const registrationPage = document.querySelector('.registration-page')
    const firstLoginPage = document.querySelector('.first-login-page')
    const secondLoginPage = document.querySelector('.second-login-page')
    const welcomePage = document.querySelector('.welcome-page')

    registrationPage.classList.remove('display-none')
    firstLoginPage.classList.add('display-none')
    secondLoginPage.classList.add('display-none')
    welcomePage.classList.add('display-none')



    const registrationForm = document.forms['reg-form']
    const firstName = document.querySelector('.registration-form .left-side .first-name')
    const lastName = document.querySelector('.registration-form .left-side .last-name')
    const userEmail = document.querySelector('.registration-form .left-side .user-email')
    const userPassword = document.querySelector('.registration-form .left-side .user-password')
    const retypePassword = document.querySelector('.registration-form .left-side .retype-password')
    const signupButton = document.querySelector('.registration-form .left-side .signup-button')
    const check = document.querySelector('.checkbox-wrapper .check')
    const checkWrapper = document.querySelector('.left-side .checkbox-wrapper')
    const emailError = registrationForm.querySelector('.user-email').parentElement.parentElement.parentElement.lastElementChild
    const nameError = registrationForm.querySelector('.first-name').parentElement.parentElement.parentElement.lastElementChild
    const passwordError = registrationForm.querySelector('.user-password').parentElement.parentElement.parentElement.lastElementChild


    //error massages
    const nameErrorSvg=registrationForm.querySelector('.name-error-svg-wrapper')
    const EmailErrorSvg=registrationForm.querySelector('.email-error-svg-wrapper')
    const PasswordErrorSvg=registrationForm.querySelector('.password-error-svg-wrapper')
    nameErrorSvg.classList.add('display-none')
    EmailErrorSvg.classList.add('display-none')
    PasswordErrorSvg.classList.add('display-none')
   




    const firstAndLastNameError=registrationForm.querySelector('.first-and-last-name-error')
    const firstNameError=registrationForm.querySelector('.first-name-error')
    const LastNameError=registrationForm.querySelector('.last-name-error')
    firstAndLastNameError.classList.add('display-none')
    firstNameError.classList.add('display-none')
    LastNameError.classList.add('display-none')


    const emailOnDisplayMassage=registrationForm.querySelector('.email-on-display-massage')
    const chooseEmailError=registrationForm.querySelector('.choose-email-error')
    const invalidEmailError=registrationForm.querySelector('.invalid-email-error')
    chooseEmailError.classList.add('display-none')
    invalidEmailError.classList.add('display-none')



    const passwordOnDisplayMassage=registrationForm.querySelector('.password-on-display-massage')
    const enterPasswordError=registrationForm.querySelector('.enter-password-error')
    const passwordCharMatchError=registrationForm.querySelector('.password-character-match-error')
    const confirmPasswordError=registrationForm.querySelector('.confirm-password-error')
    const passwordMatchError=registrationForm.querySelector('.password-match-error')

    enterPasswordError.classList.add('display-none')
    passwordCharMatchError.classList.add('display-none')
    confirmPasswordError.classList.add('display-none')
    passwordMatchError.classList.add('display-none')



    //error massages

    let userCount = 0;
    let users;
    let user;


    
    //floating label
    registrationForm.addEventListener('change', (e) => {
        if (e.target.type != 'checkbox') {
            if (e.target.value) {
                e.target.nextElementSibling.classList.add('active')
            }
            else {
                e.target.nextElementSibling.classList.remove('active')
            }
        }
    })


    // signupButton handle
    signupButton.addEventListener('click', (e) => {
        console.log('aaaa')

        e.preventDefault()

        //checkname
        checkNameFieldError()

        //checkmail
        checkEmailFieldError()

                
        //checkpassword
        checkPasswordFieldError()

        if (checkNameFieldError() && checkEmailFieldError() && checkPasswordFieldError() ) {
            user = {
                FirstName: firstName.value,
                LastName: lastName.value,
                email: userEmail.value,
                password: userPassword.value
            }
            console.log(user)
            localStorage.setItem('user', JSON.stringify(user))

            loadLoginPage('account-created')

            // location.href = form.action
        }


    })
    /*
    signupButton.addEventListener('click', (e) => {
        console.log('aaaa')
     
        e.preventDefault()
     
        //checkname
        checkNameFieldError()
     
        //checkmail
        checkEmailFieldError()
     
        //checkpassword
        checkPasswordFieldError()
     
        if (regValidation) {
            // users = JSON.parse(localStorage.getItem('users')) || []
            // console.log(users[0])
            // let userCount = JSON.parse(localStorage.getItem('users')) ? users[0].UserNo : 0;
            // userCount++;
            // let user = {
            //     UserNo: userCount,
            //     FirstName: firstName.value,
            //     LastName: lastName.value,
            //     email: userEmail.value,
            //     password: userPassword.value
            // }
            // users.push(user)
            // localStorage.setItem('users', JSON.stringify(users))
            // renderPage("login_with_mail")
     
            // localStorage.setItem(`user_${userCount}`, JSON.stringify({
            //     UserNo: userCount,
            //     FirstName: firstName.value,
            //     LastName: lastName.value,
            //     email: userEmail.value,
            //     password: userPassword.value
            // }))
     
     
     
            user = {
                FirstName: firstName.value,
                LastName: lastName.value,
                email: userEmail.value,
                password: userPassword.value
            }
            console.log(user)
     
            localStorage.setItem('user', JSON.stringify(user))
            alert('account created, please login')
            renderPage("login_with_mail")
            // location.href = form.action
        }
     
     
    })
    */

    // checkNameFieldError
    const checkNameFieldError = () => {
        if (!firstName.value && !lastName.value) {
            nameErrorSvg.classList.remove('display-none')
            firstAndLastNameError.classList.remove('display-none')
            firstNameError.classList.add('display-none')
            LastNameError.classList.add('display-none')            
            firstName.classList.add('input-error-alert')
            firstName.nextElementSibling.classList.add('label-error-alert')
            lastName.classList.add('input-error-alert')
            lastName.nextElementSibling.classList.add('label-error-alert')
            return false;
        }
        else if (!firstName.value) {
            nameErrorSvg.classList.remove('display-none')
            LastNameError.classList.add('display-none')
            firstAndLastNameError.classList.add('display-none')
            firstNameError.classList.remove('display-none')
            firstName.classList.add('input-error-alert')
            firstName.nextElementSibling.classList.add('label-error-alert')
            lastName.classList.remove('input-error-alert')
            lastName.nextElementSibling.classList.remove('label-error-alert')
            return false;
        }
        else if (!lastName.value) {
            nameErrorSvg.classList.remove('display-none')
            LastNameError.classList.remove('display-none')
            firstNameError.classList.add('display-none')
            firstAndLastNameError.classList.add('display-none')
            firstName.classList.remove('input-error-alert')
            firstName.nextElementSibling.classList.remove('label-error-alert')
            lastName.classList.add('input-error-alert')
            lastName.nextElementSibling.classList.add('label-error-alert')
            return false;

        }
        else{
            console.log(nameErrorSvg)
            LastNameError.classList.add('display-none')
            firstAndLastNameError.classList.add('display-none')
            firstNameError.classList.add('display-none')
            nameErrorSvg.classList.add('display-none')
            firstName.classList.remove('input-error-alert')
            lastName.classList.remove('input-error-alert')
            firstName.nextElementSibling.classList.remove('label-error-alert')
            lastName.nextElementSibling.classList.remove('label-error-alert')
            return true;

        }
    }

    // checkEmailFieldError

    const checkEmailFieldError = () => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!userEmail.value) {
            userEmail.classList.add('input-error-alert')
            userEmail.nextElementSibling.classList.add('label-error-alert')
            chooseEmailError.classList.remove('display-none')
            EmailErrorSvg.classList.remove('display-none')
            invalidEmailError.classList.add('display-none')
            emailOnDisplayMassage.classList.add('display-none')
            return false;
        }
        else if (!userEmail.value.match(mailformat)) {
            userEmail.classList.add('input-error-alert')
            userEmail.nextElementSibling.classList.add('label-error-alert')
            EmailErrorSvg.classList.remove('display-none')
            invalidEmailError.classList.remove('display-none')
            chooseEmailError.classList.add('display-none')
            emailOnDisplayMassage.classList.add('display-none')
            return false;
        }
        else {
            userEmail.classList.remove('input-error-alert')
            userEmail.nextElementSibling.classList.remove('label-error-alert')
            EmailErrorSvg.classList.add('display-none')
            invalidEmailError.classList.add('display-none')
            chooseEmailError.classList.add('display-none')
            emailOnDisplayMassage.classList.add('display-none')
            return true;

        }
    }

    // checkPasswordFieldError
    const checkPasswordFieldError = () => {
        var passwordFormat = /^[A-Za-z]\w{7,200}$/;

        if (!userPassword.value) {
            userPassword.classList.add('input-error-alert')
            userPassword.nextElementSibling.classList.add('label-error-alert')
            PasswordErrorSvg.classList.remove('display-none')
            enterPasswordError.classList.remove('display-none')
            passwordCharMatchError.classList.add('display-none')
            confirmPasswordError.classList.add('display-none')
            passwordMatchError.classList.add('display-none')
            passwordOnDisplayMassage.classList.add('display-none')
            return false;

        }

        else if (!userPassword.value.match(passwordFormat)) {

            userPassword.classList.add('input-error-alert')
            userPassword.nextElementSibling.classList.add('label-error-alert')
            retypePassword.classList.remove('input-error-alert')
            retypePassword.nextElementSibling.classList.remove('label-error-alert')
            PasswordErrorSvg.classList.remove('display-none')
            enterPasswordError.classList.add('display-none')
            passwordCharMatchError.classList.remove('display-none')
            confirmPasswordError.classList.add('display-none')
            passwordMatchError.classList.add('display-none')
            passwordOnDisplayMassage.classList.add('display-none')
            return false;
        }

        else if (!retypePassword.value) {
            retypePassword.classList.add('input-error-alert')
            retypePassword.nextElementSibling.classList.add('label-error-alert')
            userPassword.classList.remove('input-error-alert')
            userPassword.nextElementSibling.classList.remove('label-error-alert')
            PasswordErrorSvg.classList.remove('display-none')
            enterPasswordError.classList.add('display-none')
            passwordCharMatchError.classList.add('display-none')
            confirmPasswordError.classList.remove('display-none')
            passwordMatchError.classList.add('display-none')
            passwordOnDisplayMassage.classList.add('display-none')
            return false;
        }

        else if (userPassword.value != retypePassword.value) {
            retypePassword.classList.add('input-error-alert')
            retypePassword.nextElementSibling.classList.add('label-error-alert')
            userPassword.classList.remove('input-error-alert')
            userPassword.nextElementSibling.classList.remove('label-error-alert')
            PasswordErrorSvg.classList.remove('display-none')
            enterPasswordError.classList.add('display-none')
            passwordCharMatchError.classList.add('display-none')
            confirmPasswordError.classList.add('display-none')
            passwordMatchError.classList.remove('display-none')
            passwordOnDisplayMassage.classList.add('display-none')
            return false;
        }

        else {
            // regValidation = true;
            retypePassword.classList.remove('input-error-alert')
            userPassword.classList.remove('input-error-alert')
            userPassword.nextElementSibling.classList.remove('label-error-alert')
            retypePassword.nextElementSibling.classList.remove('label-error-alert')
            PasswordErrorSvg.classList.add('display-none')
            enterPasswordError.classList.add('display-none')
            passwordCharMatchError.classList.add('display-none')
            confirmPasswordError.classList.add('display-none')
            passwordMatchError.classList.add('display-none')
            passwordOnDisplayMassage.classList.add('display-none')
            return true;
        }

    }



    //show password
    check.addEventListener('change', (e) => {
        if (check.checked) {
            userPassword.type = 'text'
            retypePassword.type = 'text'
            checkWrapper.classList.add('on-hover')
        }
        else {
            userPassword.type = 'password'
            retypePassword.type = 'password'
            checkWrapper.classList.remove('on-hover')
        }

    })


}


loadRegistrationPage('')


// const registrationForm = document.forms['reg-form']
//     const allInputs= registrationForm.querySelectorAll('input')
//     allInputs.forEach((e)=>{
        
//         if (e.type != 'checkbox') {
//             console.log(e.value)
//             if (e.value) {
//                 e.nextElementSibling.classList.add('active')
//             }
//             else {
//                 e.nextElementSibling.classList.remove('active')
//             }
//         }
//     })