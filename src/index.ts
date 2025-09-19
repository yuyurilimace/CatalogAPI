import express from 'express';
import { InitializeFirebase } from './firebaseConfig.ts';
import { userRouter } from './Controllers/collection/index.ts';


InitializeFirebase()

const app = express()
const port = 3000;

app.use(userRouter)

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(port,() => {
    console.log("listen on port 3000")
})