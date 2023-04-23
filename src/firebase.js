import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'
// ... other firebase imports

const firebaseConfig = {
    apiKey: "AIzaSyAGBQfA_NoBey9iYWId8W35lHHmZmyRjIE",
    authDomain: "survelliance-camera-77550.firebaseapp.com",
    databaseURL: "https://survelliance-camera-77550-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "survelliance-camera-77550",
    storageBucket: "survelliance-camera-77550.appspot.com",
    messagingSenderId: "1048487773140",
    appId: "1:1048487773140:web:3763dc7329cae588164c41"
}
export const firebaseApp = initializeApp(firebaseConfig)

// used for the databas refs
const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const camerasRef = ref(db, '/cameras')
