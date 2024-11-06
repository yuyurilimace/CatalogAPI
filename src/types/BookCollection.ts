import { ReleasedVolumes } from "./releasedVolumes";

export type BookCollection = {
  id?: string;
  user_id: string;
  volume_id: string;
  volume?: ReleasedVolumes;
};
