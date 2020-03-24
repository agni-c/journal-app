import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
require("dotenv").config();

//config Firebase
const firebase = require("firebase");
require("firebase/firestore");
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: "journal-app-fb577.firebaseapp.com",
	databaseURL: process.env.DATABASE_URL,
	projectId: "journal-app-fb577",
	storageBucket: "journal-app-fb577.appspot.com",
	messagingSenderId: process.env.MSG_SENDER_ID,
	appId: process.env.APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("evernote-container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
