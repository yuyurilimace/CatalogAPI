import { ReleasedVolumes } from "./releasedVolumes";

export type BookCollection = {
  id?: string;
  userId: string;
  volumeId: string;
  volume?: ReleasedVolumes;
};
