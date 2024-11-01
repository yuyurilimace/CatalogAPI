import { Router } from "express";
import { HandleAuthorization } from "../utils/handleAuthorization";
import { Authorization } from "../middlewares/authorization";
import { HandleAsyncFunction } from "../utils/handleErros";
import { PublisherDTO } from "../DTO/publisherDTO";
import { PublisherDomain } from "../domain/publisherDomain";
import { HTTPStatusCode } from "../enuns/response";

export const PublisherRoutes = () => {
  const router = Router();

  router.use("/", HandleAuthorization(Authorization, "admin"));

  router.post(
    "/create",
    HandleAsyncFunction<PublisherDTO>(
      (publisher: PublisherDTO) =>
        PublisherDomain.CreateNewPublisher(publisher.name),
      HTTPStatusCode.Created,
      "Editora Criada"
    )
  );

  router.put(
    "/update",
    HandleAsyncFunction<PublisherDTO>(
      (publisher: PublisherDTO) => PublisherDomain.UpdatePublisher(publisher),
      HTTPStatusCode.Ok,
      "Editora Atualizada"
    )
  );

  router.delete(
    "/delete",
    HandleAsyncFunction<PublisherDTO>(
      (publisher: PublisherDTO) =>
        PublisherDomain.DeletePublisher(publisher.id),
      HTTPStatusCode.Ok,
      "Editora Apagada"
    )
  );

  router.get(
    "/",
    HandleAsyncFunction<PublisherDTO>(
      (publisher: PublisherDTO) => PublisherDomain.GetPublisher(publisher.id),
      HTTPStatusCode.Ok,
      "Editora obtida com sucesso"
    )
  );

  return router;
};
