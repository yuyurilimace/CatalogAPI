import env from "dotenv";
import admin from "firebase-admin";
import * as client from "firebase/app";

const InitializeFirebase = () => {
  try {
    const envoriment = `.env.${process.env.NODE_ENV || "development"}`;
    env.config({ path: envoriment });

    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const firebaseServiceAccount = JSON.parse(
        process.env.FIREBASE_SERVICE_ACCOUNT
      );
      admin.initializeApp({
        credential: admin.credential.cert(firebaseServiceAccount),
      });
      client.initializeApp({
        apiKey: process.env.FIREBASE_API_KEY!,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN!,
      });
      console.log("sucesso ao inicializar firebase");
    }
  } catch (err) {
    console.log("erro ao inicializar o firebase");
  }
};

export { InitializeFirebase };
