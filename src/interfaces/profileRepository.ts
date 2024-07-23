import { Profile } from "../types/profileType";

export interface ProfileRepository {
  createProfile: (profileName: string) => Promise<Profile>;
  updateProfile: (profile: Profile) => Promise<Profile>;
  deleteProfile: (profileId: string) => Promise<Profile>;
  getProfile: (profileId: string) => Promise<Profile | null>;
}
