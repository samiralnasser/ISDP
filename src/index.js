import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyBCvx1WFPYOutNvj8Hfmu_jTuxoWEQvPHc",
    authDomain: "isdp-954b3.firebaseapp.com",
    databaseURL: "https://isdp-954b3.firebaseio.com",
    projectId: "isdp-954b3",
    storageBucket: "isdp-954b3.appspot.com",
    messagingSenderId: "195263147810"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
