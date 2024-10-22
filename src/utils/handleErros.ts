import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { json, NextFunction, Request, Response } from "express";
import { HTTPStatusCode } from "../enuns/response";

const ExpectionHandler = (err: any, response: Response) => {
  if (err instanceof PrismaClientValidationError) {
    return response
      .status(HTTPStatusCode.Bad_Request)
      .send({ message: "Erro!! formulário inválido" });
  }
  if (err instanceof PrismaClientKnownRequestError) {
    return response
      .status(HTTPStatusCode.Bad_Request)
      .send({ message: err.meta?.cause });
  }
  response.status(HTTPStatusCode.Bad_Request).send({ message: "Erro!! " });
};

const HandleAsyncFunction = <T>(
  func: Function,
  responseStatus: number,
  responseMessage: string
) => {
  return async (
    req: Omit<Request, "body"> & { body: T },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data: T = await func(req.body);
      res
        .status(responseStatus)
        .send({
          message: responseMessage,
          ...(responseStatus === HTTPStatusCode.Ok && data),
        });
    } catch (err) {
      ExpectionHandler(err, res);
      next();
    }
  };
};

export { HandleAsyncFunction };
