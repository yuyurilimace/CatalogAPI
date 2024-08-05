import { Publisher } from "./publisherType";

export type Title = {
  id?: string;
  name: string;
  author: string;
  finished: boolean;
  publisher: Publisher;
  releasedVolumes?: { name: string }[];
};
