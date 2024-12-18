import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,GithubAuthProvider} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDcPs1MSljlROFChwqDM2aNpchelRjb0gA",
    authDomain: "login-form-7bba1.firebaseapp.com",
    projectId: "login-form-7bba1",
    storageBucket: "login-form-7bba1.firebasestorage.app",
    messagingSenderId: "780779455674",
    appId: "1:780779455674:web:c7d209e354129c34c82e83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
auth.languageCode = 'en';

function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId); // Use the actual variable passed
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function() {
        messageDiv.style.opacity = 0;
    }, 5000);
}

const signUp = document.getElementById('submitSignUp');
signUp.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    createUserWithEmailAndPassword(auth, email, password) // Correct variable name
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                firstName: firstName,
                lastName: lastName,
                password:password
            };
            showMessage('Account Created Successfully', 'signUpMessage');
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    window.location.href = 'Login.html';
                })
                .catch((error) => {
                    console.error("Error writing document", error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode == 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            } else {
                showMessage('Unable to create User', 'signUpMessage');
            }
        });
});

const signIn = document.getElementById('submitSignIn');
signIn.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value; // Get the value from the input field
    const password = document.getElementById('password').value; // Get the value from the input field
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password) // Pass email and password correctly
        .then((userCredential) => {
            showMessage('Login is successful', 'signInMessage');
            const user = userCredential.user;
            localStorage.setItem('loggedInUserId', user.uid); // Corrected user ID to uid
            setTimeout(() => {
                window.location.href = 'Home.html';
            }, 2000); 
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode == 'auth/invalid-email') { // Correct error code for invalid email
                showMessage('Invalid Email Address', 'signInMessage');
            } else if (errorCode == 'auth/user-not-found') { // User not found error
                showMessage('Account does not Exist', 'signInMessage');
            } else if (errorCode == 'auth/wrong-password') { // Wrong password error
                showMessage('Incorrect Password', 'signInMessage');
            } else {
                showMessage('Login failed. Please try again.', 'signInMessage');
            }
        });
});



//google LogIn
const googleLogin = document.getElementById('googleBtn');
googleLogin.addEventListener('click',function(){
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      showMessage('Google login successful', 'signInMessage');
      setTimeout(() => {
          window.location.href = 'Home.html';
      }, 2000); // Redirect after 2 seconds

    }).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      showMessage(`Google login failed: ${errorMessage}`, 'signInMessage');
    });
})

const gitLogin = document.getElementById('githubBtn');
gitLogin.addEventListener('click',function(){
    signInWithPopup(auth, gitProvider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      showMessage('Github login successful', 'signInMessage');
      setTimeout(() => {
          window.location.href = 'Home.html';
      }, 2000); // Redirect after 2 seconds
    }).catch((error) => {

      const errorCode = error.code;
      console.log(errorCode);

      const errorMessage = error.message;
      showMessage(`Github login failed: ${errorMessage}`, 'signInMessage');
    });
  
})