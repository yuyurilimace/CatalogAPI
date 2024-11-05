import { Router } from "express";
import { HandleAsyncFunction } from "../utils/handleErros";
import { TitleDomain } from "../domain/titleDomain";
import { TitleDTO } from "../DTO/TitleDTO";
import { HTTPStatusCode } from "../enuns/response";

export const TitleRouter = () => {
  const router = Router();

  router.post(
    "/create",
    HandleAsyncFunction<TitleDTO>(
      (titleDTO: TitleDTO) => TitleDomain.CreateNewTitle(titleDTO),
      HTTPStatusCode.Created,
      "Titulo Criado com sucesso"
    )
  );

  router.put(
    "/update",
    HandleAsyncFunction<TitleDTO>(
      (titleDTO: TitleDTO) => TitleDomain.UpdateNewTitle(titleDTO),
      HTTPStatusCode.Ok,
      "Titulo Editado com sucesso"
    )
  );

  router.delete(
    "/delete",
    HandleAsyncFunction<string>(
      (titleDTO: { id: string }) => TitleDomain.DeleteTitle(titleDTO.id),
      HTTPStatusCode.Ok,
      "Titulo Editado com sucesso"
    )
  );

  router.get(
    "/",
    HandleAsyncFunction<string>(
      (titleDTO: { id: string }) => TitleDomain.GetTitle(titleDTO.id),
      HTTPStatusCode.Ok,
      "Titulo obtido com sucesso"
    )
  );

  return router;
};
