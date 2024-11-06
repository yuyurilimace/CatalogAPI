import { ReleasedVolumes } from "../types/releasedVolumes";

export type ReleasedVolumesDTO = Omit<ReleasedVolumes, "title_id"> & {
  titleId: string;
};
