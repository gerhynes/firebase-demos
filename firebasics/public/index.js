import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCLxUJWRE1nIgfwvoihzrpUarwIZN7RhEM",
  authDomain: "firebasics-4ef53.firebaseapp.com",
  projectId: "firebasics-4ef53",
  storageBucket: "firebasics-4ef53.appspot.com",
  messagingSenderId: "742272693719",
  appId: "1:742272693719:web:9fd90bc0a957fd07950792",
  measurementId: "G-QQVVNRFHTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const whenSignedIn = document.getElementById("whenSignedIn");
const whenSignedOut = document.getElementById("whenSignedOut");
const userDetails = document.getElementById("userDetails");

const provider = new GoogleAuthProvider();

whenSignedOut.onclick = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });

whenSignedIn.onclick = () =>
  signOut(auth)
    .then(() => {
      console.log("Signed out");
    })
    .catch((error) => {
      console.error(error);
    });

auth.onAuthStateChanged((user) => {
  if (user) {
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
  } else {
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = "";
  }
});
