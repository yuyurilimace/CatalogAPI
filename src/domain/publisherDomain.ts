import { PublisherDTO } from "../DTO/publisherDTO";
import { PublisherRepository } from "../repository/publisherRepository";

const PublisherDomain = {
  CreateNewProfile: async (publisherName: string): Promise<PublisherDTO> => {
    const newProfile = await PublisherRepository.CreatePublisher(publisherName);
    return newProfile;
  },

  UpdateProfile: async (publisherDTO: PublisherDTO): Promise<PublisherDTO> => {
    const updateProfile = await PublisherRepository.UpdatePublisher(
      publisherDTO
    );
    return updateProfile;
  },

  DeleteProfile: async (publisherID: string): Promise<PublisherDTO> => {
    const updateProfile = await PublisherRepository.DeletePublisher(
      publisherID
    );
    return updateProfile;
  },
  GetProfile: async (publisherID: string): Promise<PublisherDTO | null> => {
    const profile = await PublisherRepository.GetPublisher(publisherID);
    return profile;
  },
};

export { PublisherDomain };
