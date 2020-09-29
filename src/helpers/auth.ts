import { auth } from "firebase";

const signup = (email: string, password: string) =>
  auth().createUserWithEmailAndPassword(email, password);

const signin = (email: string, password: string) =>
  auth().signInWithEmailAndPassword(email, password);

const signinWithGoogle = () => {
  const provider = new auth.GoogleAuthProvider();
  return auth().signInWithPopup(provider);
};

export { signup, signin, signinWithGoogle };
