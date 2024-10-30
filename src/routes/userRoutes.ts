import { Response, Router } from "express";
import { UserDomain } from "../domain/userDomain";
import { UserDTO } from "../DTO/UserDTO";
import { HandleAsyncFunction } from "../utils/handleErros";
import { HTTPStatusCode } from "../enuns/response";

const UserRoutes = () => {
  const router = Router();
  router.post(
    "/create",
    HandleAsyncFunction<UserDTO>(
      (user: UserDTO) => UserDomain.CreateNewUser(user),
      HTTPStatusCode.Created,
      "Usuário Criado com sucesso"
    )
  );

  router.put(
    "/update",
    HandleAsyncFunction<UserDTO>(
      (user: UserDTO) => UserDomain.UpdateUser(user),
      HTTPStatusCode.Ok,
      "Usuário Editado com sucesso"
    )
  );
  router.delete(
    "/delete",
    HandleAsyncFunction<string>(
      (userId: { id: string }) => UserDomain.DeleteUser(userId.id),
      HTTPStatusCode.Ok,
      "Usuário deletado com sucesso"
    )
  );

  router.get(
    "/get",
    HandleAsyncFunction<string>(
      (userId: { id: string }) => UserDomain.GetUser(userId.id),
      HTTPStatusCode.Ok,
      "Usuário obitido com sucesso"
    )
  );

  return router;
};

export { UserRoutes };
