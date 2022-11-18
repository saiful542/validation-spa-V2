const loadSecondLoginPage = () => {
    sessionStorage.setItem('page', 'login_with_password')
    window.history.pushState("", "", `index.html?signin=password`);
    const registrationPage = document.querySelector('.registration-page')
    const firstLoginPage = document.querySelector('.first-login-page')
    const secondLoginPage = document.querySelector('.second-login-page')
    const welcomePage = document.querySelector('.welcome-page')


    secondLoginPage.classList.remove('display-none')
    firstLoginPage.classList.add('display-none')
    registrationPage.classList.add('display-none')
    welcomePage.classList.add('display-none')



    const secondLoginForm = document.forms['second-login-form']
    const loginUserPassword = secondLoginForm.querySelector('.user-password')
    const loginButton = secondLoginForm.querySelector('.login-button')
    const loginPasswordError = secondLoginForm.querySelector('.user-password').parentElement.parentElement.parentElement.lastElementChild
    const check = document.querySelector('.checkbox-wrapper .check')
    const checkWrapper = document.querySelector('.checkbox-wrapper')


    const loginErrorSvgWrapper = secondLoginForm.querySelector('.login-error-svg-wrapper')
    const enterPasswordError = secondLoginForm.querySelector('.enter-password-error')
    const wrongPasswordError = secondLoginForm.querySelector('.wrong-password-error')


    loginErrorSvgWrapper.classList.add('display-none')
    enterPasswordError.classList.add('display-none')
    wrongPasswordError.classList.add('display-none')
    const savedUser = JSON.parse(localStorage.getItem('user'))

    document.querySelector('.user-email-wrapper').innerHTML = `<p>${savedUser.email}</p>`
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('ddd')
        checkPasswordFieldError()
        if (checkPasswordFieldError()) {
            if (savedUser && (savedUser.password == loginUserPassword.value)) {
                loginErrorSvgWrapper.classList.add('display-none')
                enterPasswordError.classList.add('display-none')
                wrongPasswordError.classList.add('display-none')
                secondLoginPage.classList.add('display-none')
                welcomePage.classList.remove('display-none')
                sessionStorage.setItem('page', 'registration')
                // location.href = form.action
            }
            else {
                loginErrorSvgWrapper.classList.remove('display-none')
                enterPasswordError.classList.add('display-none')
                wrongPasswordError.classList.remove('display-none')
                loginUserPassword.classList.add('input-error-alert')
                loginUserPassword.nextElementSibling.classList.add('label-error-alert')
            }
        }
    })

    // checkPasswordFieldError

    const checkPasswordFieldError = () => {
        if (!loginUserPassword.value) {
            loginErrorSvgWrapper.classList.remove('display-none')
            enterPasswordError.classList.remove('display-none')
            wrongPasswordError.classList.add('display-none')
            loginUserPassword.classList.add('input-error-alert')
            loginUserPassword.nextElementSibling.classList.add('label-error-alert')
            return false;
        }
        else {
            loginErrorSvgWrapper.classList.add('display-none')
            enterPasswordError.classList.add('display-none')
            wrongPasswordError.classList.add('display-none')
            loginUserPassword.classList.remove('input-error-alert')
            loginUserPassword.nextElementSibling.classList.remove('label-error-alert')
            return true;
        }
    }


    secondLoginForm.addEventListener('change', (e) => {
        if (e.target.type != 'checkbox') {
            if (e.target.value) {
                e.target.nextElementSibling.classList.add('active')
            }
            else {
                e.target.nextElementSibling.classList.remove('active')
            }
        }
    })


    //showpassword
    check.addEventListener('change', (e) => {
        if (check.checked) {
            loginUserPassword.type = 'text'
            checkWrapper.classList.add('on-hover')
        }
        else {
            loginUserPassword.type = 'password'
            checkWrapper.classList.remove('on-hover')
        }
    })



}