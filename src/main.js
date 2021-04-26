// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

//myFunction();

// SignUp
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("write-e-mail").value;
  const password = document.getElementById("write-password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
        signupForm.reset();
        console.log("sign up");
    })
});


//Login
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const yourEmail = document.getElementById("your-email").value;
  const yourPassword = document.getElementById("your-password").value;
    console.log(yourEmail, yourPassword);

  auth
    .signInWithEmailAndPassword(yourEmail, yourPassword)
    .then(userCredential => {
        loginForm.reset();
        console.log("sign in");
    })
});


//Google Login

const googleButton = document.querySelector("#googleLogin");
googleButton.addEventListener("click", e => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            console.log("google sign in")
            signupForm.reset();
        })
        .catch(err => {
            console.log(err)
        })
});


//Facebook Login

const facebookButton = document.querySelector("#facebookLogin");
facebookButton.addEventListener("click", e => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            console.log("facebook sign in")
            signupForm.reset();
        })
        .catch(err => {
            console.log(err)
        })
});

