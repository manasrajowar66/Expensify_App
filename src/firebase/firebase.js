/* eslint-disable no-unused-vars */
import firebase from 'firebase';
import expences from '../tests/data';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

// database.ref('expences').on('value',(snapshot)=>{
//     const Expences = [];
//     snapshot.forEach((childSnapshot)=>{
//         Expences.push({
//             ...childSnapshot.val(),
//             id:childSnapshot.key
//         });
//     });
//     console.log(Expences);
// });

// database.ref('expences').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// database.ref('expences').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });


// database.ref('expences').push(expences[0]);
// database.ref('expences').push(expences[1]);
// database.ref('expences').push(expences[2]);




