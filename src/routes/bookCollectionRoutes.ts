import { Router } from "express";
import { HandleAsyncFunction } from "../utils/handleErros";
import { BookCollectionDTO } from "../DTO/BookCollectionDTO";
import { BookCollectionDomain } from "../domain/BookCollectionDomain";
import { HTTPStatusCode } from "../enuns/response";

export const BookCollectionRoutes = () => {
  const router = Router();

  router.post(
    "/create",
    HandleAsyncFunction(
      (collection: BookCollectionDTO) =>
        BookCollectionDomain.createCollection(collection),
      HTTPStatusCode.Created,
      "Titulo inserido na coleção"
    )
  );

  router.put(
    "/update",
    HandleAsyncFunction(
      (collection: BookCollectionDTO) =>
        BookCollectionDomain.updatedCollection(collection),
      HTTPStatusCode.Ok,
      "Titulo editado na coleção"
    )
  );

  router.delete(
    "/delete",
    HandleAsyncFunction(
      (collection: BookCollectionDTO) =>
        BookCollectionDomain.deleteCollection(collection),
      HTTPStatusCode.Ok,
      "Titulo removido na coleção"
    )
  );

  router.get(
    "/",
    HandleAsyncFunction(
      (collection: BookCollectionDTO) =>
        BookCollectionDomain.getCollection(collection),
      HTTPStatusCode.Ok,
      "Titulo obtido na coleção"
    )
  );

  return router;
};
