import { Publisher } from "../types/publisherType";

export interface PublisherRepository {
  CreatePublisher: (publisherName: string) => Promise<Publisher>;
  UpdatePublisher: (publisher: Publisher) => Promise<Publisher>;
  DeletePublisher: (publisherId: string) => Promise<Publisher>;
  GetPublisher: (publisherId: string) => Promise<Publisher | null>;
}
