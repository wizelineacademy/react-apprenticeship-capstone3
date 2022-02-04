import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { app } from '../config/firebaseConfig';

const auth = getAuth(app);

export async function loginByUserAndPass(email, password) {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return resolve(userCredential.user);
      })
      .catch((error) => {
        return reject(new Error('Error'));
      });
  });
}

export async function logOut() {
  return new Promise((resolve, reject) => {
    signOut(auth)
      .then((resp) => {
        return resolve(true);
      })
      .catch((error) => {
        return reject(new Error('Error'));
      });
  });
}
