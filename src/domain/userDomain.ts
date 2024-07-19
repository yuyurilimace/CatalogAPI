import { PrismaClient } from "@prisma/client";
import { User } from "../types/userType";
import { userRepository } from "../repository/userRepository";
import { UserDTO } from "../DTO/UserDTO";

export const UserDomain = {
  CreateNewUser: async (prisma: PrismaClient, user: User): Promise<UserDTO> => {
    const newUser = await userRepository.createUser(user);
    const newUserDTO: UserDTO = {
      name: newUser.name,
      profile: newUser.profile.type,
      password: newUser.password,
    };
    return newUserDTO;
  },
  UpdateUser: async (prisma: PrismaClient, user: User): Promise<UserDTO> => {
    const updatedUser = await userRepository.updateUser(user);
    const updatedUserDTO: UserDTO = {
      name: updatedUser.name,
      profile: updatedUser.profile.type,
      password: updatedUser.password,
    };
    return updatedUserDTO;
  },
  DeleteUser: async (prisma: PrismaClient, user: User): Promise<UserDTO> => {
    const deletedUser = await userRepository.updateUser(user);
    const deletedUserDTO: UserDTO = {
      name: deletedUser.name,
      profile: deletedUser.profile.type,
      password: deletedUser.password,
    };
    return deletedUserDTO;
  },
  GetUser: async (prisma: PrismaClient, user: User): Promise<UserDTO> => {
    const gettedUser = await userRepository.updateUser(user);
    const gettedUserDTO: UserDTO = {
      name: gettedUser.name,
      profile: gettedUser.profile.type,
      password: gettedUser.password,
    };
    return gettedUserDTO;
  },
};
