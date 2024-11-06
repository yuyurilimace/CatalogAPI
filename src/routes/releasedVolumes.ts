import { Router } from "express";
import { HandleAsyncFunction } from "../utils/handleErros";
import { ReleasedVolumesDTO } from "../DTO/releasedVolumes";
import { ReleasedVolumesDomain } from "../domain/releasedVolume";
import { HTTPStatusCode } from "../enuns/response";

export const ReleasedVolumesRoutes = () => {
  const router = Router();

  router.post(
    "/create",
    HandleAsyncFunction(
      (releasedVolume: ReleasedVolumesDTO) =>
        ReleasedVolumesDomain.CreateVolume(releasedVolume),
      HTTPStatusCode.Created,
      "Volume inserido com sucesso"
    )
  );

  router.put(
    "/update",
    HandleAsyncFunction(
      (releasedVolume: ReleasedVolumesDTO) =>
        ReleasedVolumesDomain.UpdateVolume(releasedVolume),
      HTTPStatusCode.Ok,
      "Volume editado com sucesso"
    )
  );

  router.delete(
    "/delete",
    HandleAsyncFunction(
      (releasedVolume: ReleasedVolumesDTO) =>
        ReleasedVolumesDomain.DeleteVolume(releasedVolume),
      HTTPStatusCode.Ok,
      "Volume apagado com sucesso"
    )
  );

  router.get(
    "/",
    HandleAsyncFunction(
      (releasedVolume: ReleasedVolumesDTO) =>
        ReleasedVolumesDomain.GetVolume(releasedVolume),
      HTTPStatusCode.Ok,
      "Volume obtido com sucesso"
    )
  );

  return router;
};
