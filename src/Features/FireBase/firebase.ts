import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD5c9ZCnMmLe72Pub4B6vOLag9Xbv_kUd8",
    authDomain: "newsportal-ts.firebaseapp.com",
    projectId: "newsportal-ts",
    storageBucket: "newsportal-ts.appspot.com",
    messagingSenderId: "848105684753",
    appId: "1:848105684753:web:24d95b4913d3fd6f6a96b0"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth, app}