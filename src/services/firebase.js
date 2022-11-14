import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyBpudBaQH10AtyYyEiwgbSNf8n7LWtTAUE",
    authDomain: "reactchat-a91a4.firebaseapp.com",
    databaseURL: "https://reactchat-a91a4-default-rtdb.firebaseio.com",
    projectId: "reactchat-a91a4",
    storageBucket: "reactchat-a91a4.appspot.com",
    messagingSenderId: "1089300845525",
    appId: "1:1089300845525:web:afc6e004833a4990e6a35c"
};


const firebase = initializeApp(firebaseConfig);

export default firebase