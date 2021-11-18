import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc
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

// Queries
const q = query(colRef, orderBy("createdAt"));

// Realtime collection data
onSnapshot(q, (snapshot) => {
  let books = [];
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });
  console.log(books);
});

// Adding documents
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
    createdAt: serverTimestamp()
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

// Get single document
const docRef = doc(db, "books", `8gA9S5ahbQPeleilkkvz`);

getDoc(docRef).then((doc) => {
  console.log(doc.data(), doc.id);
});

onSnapshot(docRef, (doc) => {
  console.log(doc.data(), doc.id);
});

// Updating a document
const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", updateForm.id.value);

  updateDoc(docRef, {
    title: "updated title"
  }).then(() => {
    updateForm.reset();
  });
});
