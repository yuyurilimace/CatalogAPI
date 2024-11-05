import { PublisherRepository } from "../interfaces/publisherRepository";
import { Publisher } from "../types/publisherType";
import { prismaClient } from "../utils/primaConfig";

const PublisherRepository: PublisherRepository = {
  CreatePublisher: async (publisherName: string) => {
    const createdPublisher = await prismaClient.publisher.create({
      data: { name: publisherName },
    });
    return createdPublisher;
  },
  UpdatePublisher: async ({ id, name }: Publisher) => {
    const updatedPublisher = await prismaClient.publisher.update({
      where: { id: id },
      data: { name: name },
    });
    return updatedPublisher;
  },

  DeletePublisher: async (publisherId: string) => {
    const deletePublisherTitles = prismaClient.title.deleteMany({
      where: { publisher_id: publisherId },
    });
    const deletedVolumes = prismaClient.releasedVolumes.deleteMany({
      where: { title: { publisher_id: publisherId } },
    });
    const deletedCollections = prismaClient.bookCollection.deleteMany({
      where: { title: { title: { publisher_id: publisherId } } },
    });
    const deletedPublisher = prismaClient.publisher.delete({
      where: { id: publisherId },
    });

    const transaction = await prismaClient.$transaction([
      deletedCollections,
      deletedVolumes,
      deletePublisherTitles,
      deletedPublisher,
    ]);

    return transaction[3];
  },

  GetPublisher: async (publisherId: string) => {
    const publisherGetted = await prismaClient.publisher.findFirst({
      where: { id: publisherId },
    });
    return publisherGetted;
  },
};

export { PublisherRepository };
