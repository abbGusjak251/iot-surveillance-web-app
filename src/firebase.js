import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyAGBQfA_NoBey9iYWId8W35lHHmZmyRjIE",
    authDomain: "survelliance-camera-77550.firebaseapp.com",
    databaseURL: "https://survelliance-camera-77550-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "survelliance-camera-77550",
    storageBucket: "survelliance-camera-77550.appspot.com",
    messagingSenderId: "1048487773140",
    appId: "1:1048487773140:web:3763dc7329cae588164c41"
}

// Initalize app
export const firebaseApp = initializeApp(firebaseConfig)
const db = getDatabase(firebaseApp)
// Export database reference
export const camerasRef = ref(db, '/cameras')
// Register a new camera
export const registerCamera = (form, cameras) => {
    const updated_cameras = cameras
    updated_cameras.push({
        name: form.name,
        ip: form.ip,
        image: form.image,
    })
    set(camerasRef, updated_cameras)    
}
// Update information about existing camera
export const updateCamera = (form, cameras, index) => {
    const updated_cameras = cameras
    updated_cameras[index] = form
    console.log(index, updated_cameras[index], form)
    set(camerasRef, updated_cameras)    
}
