import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8G_wmtgyzhgAbXwkR0eohhCd2n4BaaWA",
    authDomain: "task-manager-reactjs-zendvn.firebaseapp.com",
    databaseURL: "https://task-manager-reactjs-zendvn.firebaseio.com",
    projectId: "task-manager-reactjs-zendvn",
    storageBucket: "task-manager-reactjs-zendvn.appspot.com",
    messagingSenderId: "1006838301140",
    appId: "1:1006838301140:web:c78ece39f45477863a9641",
    measurementId: "G-G3WHRZHVCL"
  }
  export const firebaseApp = firebase.initializeApp(firebaseConfig); 
  export const  tasksRef = firebase.database().ref('tasks');
  export const  tasksCompletedRef = firebase.database().ref('tasksCompletedRef');
  export const  usersRef = firebase.database().ref('users');
  let database = firebase.database();