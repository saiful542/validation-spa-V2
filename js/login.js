const loadLoginPage = (string) => {
    document.querySelector('.welcoming-massage').classList.add('display-none')

    if (string == 'account-created') {
        document.querySelector('.welcoming-massage').classList.remove('display-none')
    }
    else
        document.querySelector('.welcoming-massage').classList.add('display-none')





    if (string == 'from_registration') {
        sessionStorage.setItem('page', 'login_with_mail')
    }



    sessionStorage.setItem('page', 'login_with_mail')
    window.history.pushState("", "", `index.html?signin=email`);

    const registrationPage = document.querySelector('.registration-page')
    const firstLoginPage = document.querySelector('.first-login-page')
    const secondLoginPage = document.querySelector('.second-login-page')
    const welcomePage = document.querySelector('.welcome-page')

    firstLoginPage.classList.remove('display-none')
    registrationPage.classList.add('display-none')
    secondLoginPage.classList.add('display-none')
    welcomePage.classList.add('display-none')



    const loginForm = document.forms['login-form']
    const loginUserEmail = document.querySelector('.login-form .user-email')
    const loginButton = document.querySelector('.login-form .login-button')



    const loginErrorSvgWrapper = loginForm.querySelector('.login-error-svg-wrapper')
    const loginChooseMailError = loginForm.querySelector('.login-choose-mail-error')
    const loginInvalidMailError = loginForm.querySelector('.login-invalid-mail-error')
    const loginEmailFindError = loginForm.querySelector('.email-find-error')

    loginErrorSvgWrapper.classList.add('display-none')
    loginChooseMailError.classList.add('display-none')
    loginInvalidMailError.classList.add('display-none')
    loginEmailFindError.classList.add('display-none')
    console.log(loginErrorSvgWrapper)


    loginButton.addEventListener('click', (e) => {

        e.preventDefault();
        checkLoginEmailFieldError()

        const savedUser = JSON.parse(localStorage.getItem('user'))
        // console.log(savedUser)
        if (checkLoginEmailFieldError()) {
            if (savedUser && (savedUser.email == loginUserEmail.value)) {
                // location.href = form.action
                loginErrorSvgWrapper.classList.add('display-none')
                loginChooseMailError.classList.add('display-none')
                loginInvalidMailError.classList.add('display-none')
                loginEmailFindError.classList.add('display-none')
                loadSecondLoginPage();
            }
            else {
                loginErrorSvgWrapper.classList.remove('display-none')
                loginChooseMailError.classList.add('display-none')
                loginInvalidMailError.classList.add('display-none')
                loginEmailFindError.classList.remove('display-none')
            }
        }
    })


    // checkLoginEmailFieldError

    const checkLoginEmailFieldError = () => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!loginUserEmail.value) {

            loginErrorSvgWrapper.classList.remove('display-none')
            loginChooseMailError.classList.remove('display-none')
            loginInvalidMailError.classList.add('display-none')
            loginEmailFindError.classList.add('display-none')
            loginUserEmail.classList.add('input-error-alert')
            loginUserEmail.nextElementSibling.classList.add('label-error-alert')
            return false;
        }
        else if (!loginUserEmail.value.match(mailformat)) {
            loginErrorSvgWrapper.classList.remove('display-none')
            loginChooseMailError.classList.add('display-none')
            loginInvalidMailError.classList.remove('display-none')
            loginEmailFindError.classList.add('display-none')
            loginUserEmail.classList.add('input-error-alert')
            loginUserEmail.nextElementSibling.classList.add('label-error-alert')
            return false;
        }
        else {
            loginErrorSvgWrapper.classList.add('display-none')
            loginChooseMailError.classList.add('display-none')
            loginInvalidMailError.classList.add('display-none')
            loginEmailFindError.classList.add('display-none')
            validation = true;
            loginUserEmail.classList.remove('input-error-alert')
            loginUserEmail.nextElementSibling.classList.remove('label-error-alert')
            return true;
        }
    }


    loginForm.addEventListener('change', (e) => {
        if (e.target.type != 'checkbox') {
            if (e.target.value) {
                e.target.nextElementSibling.classList.add('active')
            }
            else {
                e.target.nextElementSibling.classList.remove('active')
            }
        }
    })

}