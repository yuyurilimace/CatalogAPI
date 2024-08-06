import { BookCollectionRepository } from "../interfaces/BookCollectionRepository";
import { BookCollection } from "../types/BookCollection";
import { prismaClient } from "../utils/primaConfig";

const BookCollectionRepository: BookCollectionRepository = {
  createBookCollection: async (collection: BookCollection) => {
    const newBookCollection = await prismaClient.bookCollection.create({
      data: collection,
    });
    return newBookCollection;
  },
  updateBookCollection: async (collection: BookCollection) => {
    const updatedCollection = await prismaClient.bookCollection.update({
      where: { id: collection.id ?? "" },
      data: collection,
    });
    return updatedCollection;
  },
  deleteBookCollection: async (collectionId: string) => {
    const deletedCollection = await prismaClient.bookCollection.delete({
      where: { id: collectionId },
    });
    return deletedCollection;
  },
  getBookCollection: async (collectionId: string) => {
    const gettedCollection = await prismaClient.bookCollection.findFirst({
      where: { id: collectionId },
    });
    return gettedCollection;
  },
};

export { BookCollectionRepository };
