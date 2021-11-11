import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpbPV-DhMJfcB5Sv41lqqsm1M515Al7n0",
  authDomain: "get-started-with-firebase-9.firebaseapp.com",
  projectId: "get-started-with-firebase-9",
  storageBucket: "get-started-with-firebase-9.appspot.com",
  messagingSenderId: "1028649190460",
  appId: "1:1028649190460:web:b24fa7ffb32a678a3def39"
};

// Initialize firebase app
initializeApp(firebaseConfig);

// Initialize service
const db = getFirestore();

// Collection ref
const colRef = collection(db, "books");

// Get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value
  }).then(() => {
    addBookForm.reset();
  });
});

// Deleting documents
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deleteBookForm.id.value);
  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});
