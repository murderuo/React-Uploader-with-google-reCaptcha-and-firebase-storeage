// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import {
  getStorage
} from 'firebase/storage';

//import React, { useState } from 'react';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxx',
  authDomain: 'fir-upload-5200a.firebaseapp.com',
  projectId: 'fir-upload-5200a',
  storageBucket: 'fir-upload-5200a.appspot.com',
  messagingSenderId: 'xxxxxxxxxxxxx',
  appId: 'xxxxxxx',
  measurementId: 'xxxxxxxxxxxxxxx',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//create storage
export const storage = getStorage(app);

//create storage ref
//const storageRef = ref(storage, '/uploads/');
