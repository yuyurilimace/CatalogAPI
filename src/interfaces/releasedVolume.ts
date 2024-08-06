import { ReleasedVolumes } from "../types/releasedVolumes";

export interface ReleasedVolumesRepository {
  CreateVolume: (releasedVolumes: ReleasedVolumes) => Promise<ReleasedVolumes>;
  UpdateVolume: (releasedVolumes: ReleasedVolumes) => Promise<ReleasedVolumes>;
  DeleteVolume: (volumeId: string) => Promise<ReleasedVolumes>;
  GetVolume: (volumeId: string) => Promise<ReleasedVolumes | null>;
}
