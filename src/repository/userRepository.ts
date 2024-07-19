import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../interfaces/userRepository";
import { User } from "../types/userType";

export const userRepository: UserRepository = {
  createUser: async (user: User) => {
    const prisma = new PrismaClient();
    const userCreated = await prisma.user.create({
      data: { ...user, profile: { connect: { id: user.profile.id } } },
      select: {
        profile: { select: { id: true, type: true } },
        id: true,
        name: true,
        password: true,
      },
    });
    return userCreated;
  },

  updateUser: async (user: User) => {
    const prisma = new PrismaClient();
    const updateUser = await prisma.user.update({
      where: { id: user.id },
      data: { ...user, profile: { connect: { id: user.profile.id } } },
      select: {
        profile: { select: { id: true, type: true } },
        id: true,
        name: true,
        password: true,
      },
    });
    return updateUser;
  },

  deleteUser: async (user: User) => {
    const prisma = new PrismaClient();
    const deletedUser = prisma.user.delete({
      include: { profile: true },
      where: { id: user.id },
    });
    const deleteUserBooks = prisma.bookCollection.deleteMany({
      where: { userId: user.id },
    });
    const transaction = await prisma.$transaction([
      deletedUser,
      deleteUserBooks,
    ]);

    return transaction[0];
  },

  getUser: async (user: User) => {
    const prisma = new PrismaClient();
    const gettedUser = await prisma.user.findFirst({
      where: { name: user.name, password: user.password, id: user.id },
      select: {
        profile: { select: { id: true, type: true } },
        id: true,
        name: true,
        password: true,
      },
    });

    return gettedUser;
  },
};
