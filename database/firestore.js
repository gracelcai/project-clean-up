//import * as firebase from "firebase";
import { App } from "../firebaseConfig";
import { Firestore, getFirestore } from "firebase/firestore";
//import "firebase/firestore";

export const db = getFirestore(App);
