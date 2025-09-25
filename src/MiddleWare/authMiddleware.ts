import type { NextFunction, Request, Response } from "express";
import { getAuth } from "firebase-admin/auth";

const authMiddleware = async (
  req: Request<{}, {}, { token: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userToken = req.body.token;

    const isValidToken = await getAuth().verifyIdToken(userToken);
    console.log(isValidToken);
    if (isValidToken) {
      next();
    } else {
      res.send("Not Allowed");
    }
  } catch (err) {
    console.log(err, "token não é valido ");
    res.send("formato de token não é valido");
  }
};

export { authMiddleware };
