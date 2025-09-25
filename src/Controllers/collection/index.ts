import { Router } from "express";
import {} from "firebase-admin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { authMiddleware } from "../../MiddleWare/authMiddleware.ts";

const userRouter: Router = Router();

// userRouter.use(authMiddleware);

userRouter.post("/collection", authMiddleware, async (req, res) => {
  const teste = await getAuth().verifyIdToken(req.body.token);
  const ola = "asldkasld ";
  console.log(teste);
  res.send("Collection Route");
});

export { userRouter };
