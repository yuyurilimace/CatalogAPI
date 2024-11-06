import { BookCollectionDTO } from "../DTO/BookCollectionDTO";
import { BookCollection } from "../types/BookCollection";

export interface BookCollectionRepository {
  createBookCollection: (
    bookCollectionDTO: BookCollectionDTO
  ) => Promise<BookCollection>;
  updateBookCollection: (
    bookCollectionDTO: BookCollectionDTO
  ) => Promise<BookCollection>;
  deleteBookCollection: (
    bookCollectionDTO: BookCollectionDTO
  ) => Promise<BookCollection>;
  getBookCollection: (
    bookCollectionDTO: BookCollectionDTO
  ) => Promise<BookCollection | null>;
}
