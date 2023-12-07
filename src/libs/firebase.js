// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDTPCYqzm3_E-GKs7aE5ElanepNClTlI7U',
  authDomain: 'womazing-217a2.firebaseapp.com',
  databaseURL:
    'https://womazing-217a2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'womazing-217a2',
  storageBucket: 'womazing-217a2.appspot.com',
  messagingSenderId: '624581726101',
  appId: '1:624581726101:web:0edc191148392d3e57709c',
  measurementId: 'G-LQC4Q87VV3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
