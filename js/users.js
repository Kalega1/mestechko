
auth.onAuthStateChanged((user) => {
    if (user) {
        console.log("user is signed in at user.html");
    } else {
        alert(
            "Вас долго не было и вас разлогинило, или сами нажали на выход."
        );
        location = "login.html";
    }
});

function logout() {
    auth.signOut();
}
