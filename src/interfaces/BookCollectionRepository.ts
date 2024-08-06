import { BookCollectionDTO } from "../DTO/BookCollectionDTO";
import { BookCollection } from "../types/BookCollection";

export interface BookCollectionRepository {
  createBookCollection: (
    bookCollectionDTO: BookCollectionDTO
  ) => Promise<BookCollection>;
  updateBookCollection: (
    bookCollectionDTO: BookCollectionDTO
  ) => Promise<BookCollection>;
  deleteBookCollection: (collectionID: string) => Promise<BookCollection>;
  getBookCollection: (collectionID: string) => Promise<BookCollection | null>;
}
