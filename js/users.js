auth.onAuthStateChanged(user => {
    if(user) {
        console.log('user is signed in at users.html');
    } else {
        alert('you login session has expired or you have logged out to cont')
        location = "index.html"
    }
})