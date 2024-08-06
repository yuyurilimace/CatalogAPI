import { ReleasedVolumesRepository } from "../interfaces/releasedVolume";
import { ReleasedVolumes } from "../types/releasedVolumes";
import { prismaClient } from "../utils/primaConfig";

const ReleasedVolumesRepository: ReleasedVolumesRepository = {
  CreateVolume: async ({ name, titleId }: ReleasedVolumes) => {
    const newVolume = await prismaClient.releasedVolumes.create({
      data: { name, title: { connect: { id: titleId } } },
    });
    return newVolume;
  },
  UpdateVolume: async (releasedVolumes: ReleasedVolumes) => {
    const updatedVolumes = await prismaClient.releasedVolumes.update({
      where: { id: releasedVolumes.id },
      data: { name: releasedVolumes.name },
    });
    return updatedVolumes;
  },
  DeleteVolume: async (volumeId: string) => {
    const deletedVolume = await prismaClient.releasedVolumes.delete({
      where: { id: volumeId },
    });
    return deletedVolume;
  },
  GetVolume: async (volumeId: string) => {
    const gettedVolume = await prismaClient.releasedVolumes.findFirst({
      where: { id: volumeId },
      include: { title: { include: { publisher: true } } },
    });
    return gettedVolume;
  },
};

export { ReleasedVolumesRepository };
