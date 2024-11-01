import { verify } from "jsonwebtoken";

export const Authorization = async (token: string) => {
  if (process.env.SECRET_JWT) {
    return verify(token, process.env.SECRET_JWT, (err, info) => {
      if (err) {
        throw new Error();
      }
      return info;
    });
  }
};
