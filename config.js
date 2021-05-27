import firebase from 'firebase';
require ('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyD-Z22sakqzWoQleAC5X8FubXLb4tQ1FY0",
    authDomain: "barter-5aabb.firebaseapp.com",
    projectId: "barter-5aabb",
    storageBucket: "barter-5aabb.appspot.com",
    messagingSenderId: "187745808064",
    appId: "1:187745808064:web:812095be86301d4e3c0725"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();