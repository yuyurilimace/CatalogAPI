import env from 'dotenv'
import admin from 'firebase-admin';

const InitializeFirebase = () => {
    try{
        const envoriment =  `.env.${process.env.NODE_ENV || "development"}`;
        env.config({path:envoriment})
        
        if(process.env.FIREBASE_SERVICE_ACCOUNT){
            const firebaseServiceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
            admin.initializeApp({
                credential:admin.credential.cert(firebaseServiceAccount)
            })
            console.log("sucesso ao inicializar firebase")
        
        }
    }
    catch(err){
        console.log("erro ao inicializar o firebase")
    }
}

export {InitializeFirebase}