import { Router, type Request, type Response } from "express";
import {} from "firebase-admin";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import { authMiddleware } from "../../MiddleWare/authMiddleware.ts";
import type { FirebaseAuthError } from "firebase-admin/auth";
import { FirebaseError } from "firebase/app";
import type {
  UserAuthRequest,
  UserRequest,
  UserResponse,
} from "../../types/auth.types.ts";
import { AuthServices } from "../../Services/auth/authServices.ts";

const authRouter: Router = Router();

authRouter.post("/register", async (req: Request<{}, {}, UserRequest>, res) => {
  try {
    const userResponse: UserResponse = await AuthServices.createUser(req.body);
    if (userResponse.token) {
      res.send(userResponse);
    }
  } catch (err) {
    if (err instanceof FirebaseError) {
      res.send({ error: err.code });
    }
  }
});

authRouter.post(
  "/login",
  async (req: Request<{}, {}, UserAuthRequest>, res: Response) => {
    try {
      const userAuthResponse: UserResponse =
        await AuthServices.authenticateUser(req.body);
      if (userAuthResponse.token) {
        res.send(userAuthResponse);
      }
    } catch (err: any) {
      if (err instanceof FirebaseError) {
        res.send({ code: err.code, message: err.message });
      } else {
        res.send(err["message"]);
      }
    }
  }
);

export { authRouter };
