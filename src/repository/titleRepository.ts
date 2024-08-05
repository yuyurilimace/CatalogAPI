import { TitleRepository } from "../interfaces/titleRepository";
import { Title } from "../types/titleType";
import { prismaClient } from "../utils/primaConfig";

const TitleRepository: TitleRepository = {
  CreateTitle: async ({
    name,
    author,
    finished,
    publisher: { id: publisherId },
  }: Title) => {
    const newTitle = await prismaClient.title.create({
      data: {
        name,
        author,
        finished,
        publisher: { connect: { id: publisherId } },
      },
      include: { publisher: true },
    });
    return newTitle;
  },
  UpdateTitle: async ({
    id,
    name,
    author,
    finished,
    publisher: { id: publisherId },
  }: Title) => {
    const updateTitle = await prismaClient.title.update({
      where: { id: id },
      data: { id: id, name, author, finished, publisherId },
      include: { publisher: true, volumes: true },
    });
    return updateTitle;
  },
  DeleteTitle: async (titleId: string) => {
    const deletedReleasedVolumes = prismaClient.releasedVolumes.deleteMany({
      where: { title: { id: titleId } },
    });
    const deletedTitle = prismaClient.title.delete({
      where: { id: titleId },
      include: { publisher: true, volumes: true },
    });
    const transaction = await prismaClient.$transaction([
      deletedReleasedVolumes,
      deletedTitle,
    ]);
    return transaction[1];
  },
  GetTitle: async (titleId: string) => {
    const findedTitle = await prismaClient.title.findFirst({
      where: { id: titleId },
      include: { publisher: true, volumes: true },
    });
    return findedTitle;
  },
};

export { TitleRepository };
