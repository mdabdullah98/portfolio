import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import detaEnv from "../config/config";

const firebaseConfig = {
  databaseURL: detaEnv.firsebase_rtdb,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
