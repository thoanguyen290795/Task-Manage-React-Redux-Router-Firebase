import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {firebaseApp,usersRef} from './firebase'; 
import { Provider } from 'react-redux';
import appReducers from './reducers/index';
import store from './store';
import {actLogin,actLogout} from './actions/index';
firebaseApp.auth().onAuthStateChanged(function(user) {
  if (user){
    // var email = user.email;
    let userInfo = {
      email:user.email,
      uid:user.uid,
      website:'',
      isAdmin:false  
    }
    usersRef.child(user.uid).once('value').then(data=> {
      userInfo.website = data.val().website;
      userInfo.isAdmin = data.val().isAdmin;
      store.dispatch(actLogin(userInfo))
    })
  } else {
    store.dispatch(actLogout())
    // User is signed out.
    // ...
  }
});
ReactDOM.render(
  <Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
