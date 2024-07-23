import { ProfileDTO } from "../DTO/ProfileDTO";
import { ProfileRepository } from "../repository/profileRepository";

const ProfileDomain = {
  CreateNewProfile: async (profileName: string): Promise<ProfileDTO> => {
    const newProfile = await ProfileRepository.createProfile(profileName);
    return newProfile;
  },

  UpdateProfile: async (profileDTO: ProfileDTO): Promise<ProfileDTO> => {
    const updateProfile = await ProfileRepository.updateProfile(profileDTO);
    return updateProfile;
  },

  DeleteProfile: async (profileId: string): Promise<ProfileDTO> => {
    const updateProfile = await ProfileRepository.deleteProfile(profileId);
    return updateProfile;
  },
  GetProfile: async (profileId: string): Promise<ProfileDTO | null> => {
    const profile = await ProfileRepository.getProfile(profileId);
    return profile;
  },
};

export { ProfileDomain };
