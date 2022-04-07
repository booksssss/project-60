import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyBpWJBb_yc4P7-gSX_ePpLhH-huk-SdxMU",
  authDomain: "attendance-app-691a9.firebaseapp.com",
  projectId: "attendance-app-691a9",
  storageBucket: "attendance-app-691a9.appspot.com",
  messagingSenderId: "685712294298",
  appId: "1:685712294298:web:a7a5d6a6a251c8de7eba23"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase.database();

console.log(firebase.name);
console.log(firebase.database());
 

// import * as firebase from "firebase";

// var firebaseConfig = {
//     apiKey: "AIzaSyBF4daUkQEGeiJCvEkCETiZOFDgHyrM_u8",
//     authDomain: "bombay-international-final.firebaseapp.com",
//     databaseURL: "https://bombay-international-final.firebaseio.com",
//     projectId: "bombay-international-final",
//     storageBucket: "bombay-international-final.appspot.com",
//     messagingSenderId: "216046228955",
//     appId: "1:216046228955:web:4cf9cf2221fb246488c3fe"
//   };




 

  