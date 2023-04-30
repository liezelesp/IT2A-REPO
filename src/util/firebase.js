





import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyCOHQRohJ3jZjZTvDaBLoP1lf7invdDkjE",
    authDomain: "esplana-react-app.firebaseapp.com",
    databaseURL: "https://esplana-react-app-default-rtdb.firebaseio.com",
    projectId: "esplana-react-app",
    storageBucket: "esplana-react-app.appspot.com",
    messagingSenderId: "959977263121",
    appId: "1:959977263121:web:b573df5bbb2438a387a1b0",
    measurementId: "G-93CR2LRKM8"};

firebase.initializeApp(firebaseConfig);

const createTodo = (todo) => {
  firebase.database().ref("Todo").push(todo);
};

export { firebase, createTodo };






