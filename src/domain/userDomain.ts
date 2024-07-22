import { PrismaClient } from "@prisma/client";
import { User } from "../types/userType";
import { userRepository } from "../repository/userRepository";
import { UserDTO } from "../DTO/UserDTO";
import { UserMappping } from "../mapping/userMapping";

export const UserDomain = {
  CreateNewUser: async (
    prisma: PrismaClient,
    userDTO: UserDTO
  ): Promise<UserDTO> => {
    const user = UserMappping.DTOToModel(userDTO);
    const newUser = await userRepository.createUser(user);
    const newUserDTO = UserMappping.ModelToDTO(newUser);
    return newUserDTO;
  },
  UpdateUser: async (
    prisma: PrismaClient,
    userDTO: UserDTO
  ): Promise<UserDTO> => {
    const user = UserMappping.DTOToModel(userDTO);
    const updatedUser = await userRepository.updateUser(user);
    const updatedUserDTO = UserMappping.ModelToDTO(updatedUser);
    return updatedUserDTO;
  },
  DeleteUser: async (
    prisma: PrismaClient,
    userId: string
  ): Promise<UserDTO> => {
    const deletedUser = await userRepository.deleteUser(userId);
    const deletedUserDTO = UserMappping.ModelToDTO(deletedUser);
    return deletedUserDTO;
  },
  GetUser: async (
    prisma: PrismaClient,
    userId: string
  ): Promise<UserDTO | null> => {
    const gettedUser = await userRepository.getUser(userId);
    if (gettedUser) {
      const gettedUserDTO = UserMappping.ModelToDTO(gettedUser);
      return gettedUserDTO;
    }
    return null;
  },
};
