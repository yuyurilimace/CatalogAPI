import { ProfileDTO } from "../DTO/ProfileDTO";
import { ProfileRepository } from "../interfaces/profileRepository";
import { Profile } from "../types/profileType";
import { prismaClient } from "../utils/primaConfig";

const ProfileRepository: ProfileRepository = {
  createProfile: async (profileName: string) => {
    const newProfile = await prismaClient.profile.create({
      data: { type: profileName },
    });
    return newProfile;
  },
  updateProfile: async ({ id, type }: Profile) => {
    const updateProfile = await prismaClient.profile.update({
      where: { id: id },
      data: { id, type },
    });
    return updateProfile;
  },
  deleteProfile: async (profileId: string) => {
    const deletedProfile = await prismaClient.profile.delete({
      where: { id: profileId },
    });
    return deletedProfile;
  },
  getProfile: async (profileId: string) => {
    const profile = await prismaClient.profile.findFirst({
      where: { id: profileId },
    });
    return profile;
  },
};

export { ProfileRepository };
