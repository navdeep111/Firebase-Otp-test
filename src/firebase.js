import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOKQ8rMP_OcLHH66FzT2DnTj1sTCpJSKg",
  authDomain: "login-otp-e845c.firebaseapp.com",
  projectId: "login-otp-e845c",
  storageBucket: "login-otp-e845c.appspot.com",
  messagingSenderId: "467853239640",
  appId: "1:467853239640:web:682a41719bf4925efaf12d",
  measurementId: "G-26BKMKWMLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
