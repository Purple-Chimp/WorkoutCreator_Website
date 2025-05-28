// Initialize Firebase using the compat SDK (no import statements)
const firebaseConfig = {
  apiKey: "AIzaSyBgXwRjEZbDfydUFejqCKF1cbMMIUzrh2k",
  authDomain: "workout-website-4ad4d.firebaseapp.com",
  projectId: "workout-website-4ad4d",
  storageBucket: "workout-website-4ad4d.appspot.com",
  messagingSenderId: "941423667571",
  appId: "1:941423667571:web:9e325183fc5af96f08bd06",
  measurementId: "G-NMCWE627KM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firestore
window.db = firebase.firestore();

