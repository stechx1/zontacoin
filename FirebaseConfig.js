import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxtXikL2PokH_PNDEJg9hYZel-p1mWDOQ",
    authDomain: "zontacoin.firebaseapp.com",
    projectId: "zontacoin",
    storageBucket: "zontacoin.appspot.com",
    messagingSenderId: "678881429627",
    appId: "1:678881429627:web:1686ca69fff147bf01fade"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);
