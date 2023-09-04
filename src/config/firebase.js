import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: "AIzaSyDf0sBIrJzH_26eLhJCtBjxp29Yx9RpYFI",
	authDomain: "dragon-20621.firebaseapp.com",
	projectId: "dragon-20621",
	storageBucket: "dragon-20621.appspot.com",
	messagingSenderId: "335588296100",
	appId: "1:335588296100:web:8da38b4f092d78a186ed31"
};

const app = initializeApp( firebaseConfig );
export const store = getFirestore( app );
export const storage = getStorage( app );
