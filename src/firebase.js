import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.NODE_ENV_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NODE_ENV_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NODE_ENV_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NODE_ENV_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NODE_ENV_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NODE_ENV_PUBLIC_APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db;
