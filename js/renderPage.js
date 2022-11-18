
const registrationPage = document.querySelector('.registration-page')
const firstLoginPage = document.querySelector('.first-login-page')
const secondLoginPage = document.querySelector('.second-login-page')
const welcomePage = document.querySelector('.welcome-page')

const checkOnload = () => {

    if (sessionStorage.getItem('page') == 'registration') {
        loadRegistrationPage('')
    }
    else if (sessionStorage.getItem('page') == 'login_with_mail') {
        loadLoginPage('')
    }

    else if (sessionStorage.getItem('page') == 'login_with_password') {
        loadSecondLoginPage()
    }
    else {
        sessionStorage.setItem('page', 'registration')
    }

}
