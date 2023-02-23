const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', e => {
    e.preventDefault()
    const loginEmail = loginForm['email'].value
    const loginPassword = loginForm['password'].value

    auth.signInWithEmailAndPassword(loginEmail, loginPassword).then(() =>
        location = "user.html"
        ).catch(err => console.log(err))
    
})