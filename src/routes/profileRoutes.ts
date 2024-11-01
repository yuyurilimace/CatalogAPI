import { Router } from "express";
import { HandleAsyncFunction } from "../utils/handleErros";
import { ProfileDTO } from "../DTO/ProfileDTO";
import { ProfileDomain } from "../domain/profileDomain";
import { HTTPStatusCode } from "../enuns/response";
import { verify } from "jsonwebtoken";
import { HandleAuthorization } from "../utils/handleAuthorization";
import { Authorization } from "../middlewares/authorization";

const ProfileRoutes = () => {
  const router = Router();

  router.use("/", HandleAuthorization(Authorization, "admin"));

  router.post(
    "/create",
    HandleAsyncFunction<ProfileDTO>(
      (profile: ProfileDTO) => ProfileDomain.CreateNewProfile(profile.type),
      HTTPStatusCode.Created,
      "Perfil criado com  sucesso"
    )
  );

  router.put(
    "/update",
    HandleAsyncFunction<ProfileDTO>(
      (profile: ProfileDTO) => ProfileDomain.UpdateProfile(profile),
      HTTPStatusCode.Ok,
      "Perfil editado com  sucesso"
    )
  );

  router.delete(
    "/",
    HandleAsyncFunction<ProfileDTO>(
      (profile: ProfileDTO) => ProfileDomain.DeleteProfile(profile.id),
      HTTPStatusCode.Ok,
      "Perfil apagado com sucesso"
    )
  );

  router.get(
    "/",
    HandleAsyncFunction<ProfileDTO>(
      (profile: ProfileDTO) => ProfileDomain.GetProfile(profile.id),
      HTTPStatusCode.Ok,
      "Perfil obtido com sucesso"
    )
  );

  return router;
};

export { ProfileRoutes };
