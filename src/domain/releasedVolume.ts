import { ReleasedVolumesDTO } from "../DTO/releasedVolumes";
import { ReleasedVolumesRepository } from "../repository/releasedVolumesRepository";

const ReleasedVolumesDomain = {
  CreateVolume: async (releasedVolume: ReleasedVolumesDTO) => {
    const createdVolume = await ReleasedVolumesRepository.CreateVolume({
      ...releasedVolume,
      title_id: releasedVolume.titleId,
    });
    return createdVolume;
  },

  UpdateVolume: async (releasedVolume: ReleasedVolumesDTO) => {
    const updateVolume = await ReleasedVolumesRepository.UpdateVolume({
      ...releasedVolume,
      title_id: releasedVolume.titleId,
    });
    return updateVolume;
  },
  DeleteVolume: async (releasedVolumes: ReleasedVolumesDTO) => {
    const deletedVolume = await ReleasedVolumesRepository.DeleteVolume(
      releasedVolumes.id ?? ""
    );
    return deletedVolume;
  },
  GetVolume: async (releasedVolume: ReleasedVolumesDTO) => {
    const volume = await ReleasedVolumesRepository.GetVolume(
      releasedVolume.id ?? ""
    );
    return volume;
  },
};

export { ReleasedVolumesDomain };
