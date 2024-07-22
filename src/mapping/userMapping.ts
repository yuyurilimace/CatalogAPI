import { UserDTO } from "../DTO/UserDTO";
import { User } from "../types/userType";

export const UserMappping = {
  ModelToDTO: (user: User) => {
    const DTO: UserDTO = {
      ...user,
      profile: user.profile.type,
    };
    return DTO;
  },

  DTOToModel: (userDTO: UserDTO) => {
    const userModel: User = {
      ...userDTO,
      profile: { type: userDTO.profile },
      password: userDTO.password ?? "",
    };
    return userModel;
  },
};
