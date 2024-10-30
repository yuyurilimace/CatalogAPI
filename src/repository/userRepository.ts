import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../interfaces/userRepository";
import { User } from "../types/userType";

export const userRepository: UserRepository = {
  createUser: async (user: User) => {
    const prisma = new PrismaClient();
    const userCreated = await prisma.user.create({
      data: {
        ...user,
        profile: { connect: { type: user.profile.type } },
      },
      select: {
        profile: { select: { type: true } },
        id: true,
        name: true,
        password: true,
        email: true,
      },
    });
    return userCreated;
  },

  updateUser: async (user: User) => {
    const prisma = new PrismaClient();
    const updateUser = await prisma.user.update({
      where: { id: user.id },
      data: { ...user, profile: { connect: { type: user.profile.type } } },
      select: {
        profile: { select: { id: true, type: true } },
        id: true,
        name: true,
        password: true,
        email: true,
      },
    });
    return updateUser;
  },

  deleteUser: async (userId: string) => {
    const prisma = new PrismaClient();
    const deleteUserBooks = prisma.bookCollection.deleteMany({
      where: { userId: userId },
    });
    const deletedUser = prisma.user.delete({
      include: { profile: { select: { type: true } } },
      where: { id: userId },
    });

    const transaction = await prisma.$transaction([
      deleteUserBooks,
      deletedUser,
    ]);

    return transaction[1];
  },

  getUser: async (userId: string) => {
    const prisma = new PrismaClient();
    const gettedUser = await prisma.user.findFirst({
      where: { id: userId },
      select: {
        profile: { select: { type: true } },
        id: true,
        name: true,
        password: true,
        email: true,
      },
    });

    return gettedUser;
  },
};
