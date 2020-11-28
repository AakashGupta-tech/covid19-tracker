import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7jAwkC5rctuBaD98bkYFr7qHoePz_Myg",
  authDomain: "covid-tracker-5648c.firebaseapp.com",
  databaseURL: "https://covid-tracker-5648c.firebaseio.com",
  projectId: "covid-tracker-5648c",
  storageBucket: "covid-tracker-5648c.appspot.com",
  messagingSenderId: "295659312794",
  appId: "1:295659312794:web:3794c5b041990c8e453123",
  measurementId: "G-H22DBY12TT",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
