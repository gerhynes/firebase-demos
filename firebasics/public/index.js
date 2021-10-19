import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-analytics.js";

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
console.log(app);
