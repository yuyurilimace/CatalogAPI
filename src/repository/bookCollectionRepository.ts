import { BookCollectionDTO } from "../DTO/BookCollectionDTO";
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
  updateBookCollection: async (collection: BookCollectionDTO) => {
    const updatedCollection = await prismaClient.bookCollection.update({
      where: {
        collection_id: {
          user_id: collection.user_id,
          volume_id: collection.volume_update_id,
        },
      },
      data: { user_id: collection.user_id, volume_id: collection.volume_id },
    });
    return updatedCollection;
  },
  deleteBookCollection: async (collection: BookCollection) => {
    const deletedCollection = await prismaClient.bookCollection.delete({
      where: {
        collection_id: {
          user_id: collection.user_id,
          volume_id: collection.volume_id,
        },
      },
    });
    return deletedCollection;
  },
  getBookCollection: async (collection: BookCollection) => {
    const gettedCollection = await prismaClient.bookCollection.findUnique({
      where: {
        collection_id: {
          user_id: collection.user_id,
          volume_id: collection.volume_id,
        },
      },
    });
    return gettedCollection;
  },
};

export { BookCollectionRepository };
