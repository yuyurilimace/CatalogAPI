import express from "express";
import { InitializeFirebase } from "./firebaseConfig.ts";
import { userRouter } from "./Controllers/collection/index.ts";
import { authMiddleware } from "./MiddleWare/authMiddleware.ts";
import env from "dotenv";

import { getAuth } from "firebase-admin/auth";
import { authRouter } from "./Controllers/auth/index.ts";

InitializeFirebase();

const app = express();
const port = 3000;
const envoriment = `${process.env.NODE_ENV || "development"}`;
app.use(express.json());
app.use(userRouter);
app.use(authRouter);

if (envoriment === "development") {
  app.get("/dev", async (req, res) => {
    const token = await getAuth().getUserByEmail(
      process.env.DEVELOPER_USER as string
    );
    if (token) {
      const generate = await getAuth().createCustomToken(token.uid);
      res.send(generate);
    }
  });
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("listen on port 3000");
});
