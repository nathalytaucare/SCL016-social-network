/* eslint-disable no-restricted-globals */
// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { routes } from './routes.js';

firstPage();

function firstPage() {
  history.pushState(null, 'home', '#/home');

  url();
}

const toContinue = document.getElementById('start-btn');
toContinue.addEventListener('click', () => {
  history.pushState(null, 'login', '#/login');

  url();

  // //Login

  const loginForm = document.querySelector('#login-form');
  console.log(loginForm);
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const yourEmail = document.getElementById('your-email').value;
    const yourPassword = document.getElementById('your-password').value;
    console.log(yourEmail, yourPassword);

    auth
      .signInWithEmailAndPassword(yourEmail, yourPassword)
      .then(() => {
        loginForm.reset();
        console.log('sign in');
      });
  });

  // Google Login

  const googleButton = document.querySelector('#googleLogin');
  googleButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(() => {
        console.log('google sign in');
        signupForm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // Facebook Login

  const facebookButton = document.querySelector('#facebookLogin');
  facebookButton.addEventListener('click', () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
      .then(() => {
        console.log('facebook sign in');
        signupForm.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

function url() {
  // const url = window.location.hash;
  // console.log(url);
  routes(window.location.hash);
}

// SignUp
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('write-e-mail').value;
  const password = document.getElementById('write-password').value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      signupForm.reset();
      console.log('sign up');
    });
});
