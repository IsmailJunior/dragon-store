import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyApXh2s5L4BGzd0tV8Q1jz8YU9gSV_VlQc",
	authDomain: "dragon-group-c04ca.firebaseapp.com",
	projectId: "dragon-group-c04ca",
	storageBucket: "dragon-group-c04ca.appspot.com",
	messagingSenderId: "410914598752",
	appId: "1:410914598752:web:a92a517915e9511258f805"
};

const app = initializeApp( firebaseConfig );
export const store = getFirestore( app );
export const storage = getStorage( app );
export const auth = getAuth( app );
