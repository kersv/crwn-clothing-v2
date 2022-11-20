import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import { getTTFB } from 'web-vitals';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB7znuWdw5jsu0L_XLFTj_jqqGT4lZk3J0",
  authDomain: "crwn-clothing-db-ef75e.firebaseapp.com",
  projectId: "crwn-clothing-db-ef75e",
  storageBucket: "crwn-clothing-db-ef75e.appspot.com",
  messagingSenderId: "460483354749",
  appId: "1:460483354749:web:3b2012cb18ca092b911114"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });

    } catch (error) {
      console.log('error creating the user', error.message);
    }

  }
  return userDocRef;


  // if user data does not exist
  // create & set the document with the data from userAuth in my collection

  // if user data exist

  // return userdocRef
}