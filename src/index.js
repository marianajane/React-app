import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


  // Initialize Firebase
  firebase.initializeApp({
  	apiKey: "AIzaSyAtvlypw-QLnhFHS26sTk2L1x4KjkCR90A",
    authDomain: "pseudogram-5acb7.firebaseapp.com",
    databaseURL: "https://pseudogram-5acb7.firebaseio.com",
    projectId: "pseudogram-5acb7",
    storageBucket: "pseudogram-5acb7.appspot.com",
    messagingSenderId: "999767590551"
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
