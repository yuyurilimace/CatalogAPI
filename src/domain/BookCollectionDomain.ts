import { BookCollectionDTO } from "../DTO/BookCollectionDTO";
import { BookCollectionRepository } from "../repository/bookCollectionRepository";

const BookCollectionDomain = {
  createCollection: async (bookCollectionDTO: BookCollectionDTO) => {
    const createdCollection =
      await BookCollectionRepository.createBookCollection(bookCollectionDTO);
    return createdCollection;
  },
  updatedCollection: async (bookCollectionDTO: BookCollectionDTO) => {
    const updatedCollection =
      await BookCollectionRepository.updateBookCollection(bookCollectionDTO);
    return updatedCollection;
  },
  deleteCollection: async (bookCollectionID: BookCollectionDTO) => {
    const deletedCollection =
      await BookCollectionRepository.deleteBookCollection(bookCollectionID);
    return deletedCollection;
  },
  getCollection: async (bookCollectionId: BookCollectionDTO) => {
    const collection = await BookCollectionRepository.getBookCollection(
      bookCollectionId
    );
    return collection;
  },
};

export { BookCollectionDomain };
