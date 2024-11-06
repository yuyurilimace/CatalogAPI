import { BookCollection } from "../types/BookCollection";

export type BookCollectionDTO = BookCollection & { volume_update_id: string };
