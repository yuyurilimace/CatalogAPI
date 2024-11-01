import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { HTTPStatusCode } from "../enuns/response";
import { UserToken } from "../types/userToken";

const HandleAuthorization = (func: Function, profileLevel: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      const data: UserToken = await func(token);
      if (data.profile === profileLevel) {
        next();
      }
    } catch (err) {
      res
        .status(HTTPStatusCode.Unauthorized)
        .send({ message: "Não Autorizado" });
    }
  };
};

export { HandleAuthorization };
