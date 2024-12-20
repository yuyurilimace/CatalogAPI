import { PublisherDTO } from "../DTO/publisherDTO";
import { PublisherRepository } from "../repository/publisherRepository";

const PublisherDomain = {
  CreateNewPublisher: async (
    publisherName: string | undefined
  ): Promise<PublisherDTO> => {
    if (publisherName) {
      const newProfile = await PublisherRepository.CreatePublisher(
        publisherName
      );
      return newProfile;
    }
    throw new Error("Campo publisherName não foi enviado");
  },

  UpdatePublisher: async ({
    id,
    name = "",
  }: PublisherDTO): Promise<PublisherDTO> => {
    const updateProfile = await PublisherRepository.UpdatePublisher({
      id,
      name,
    });
    return updateProfile;
  },

  DeletePublisher: async (publisherID: string): Promise<PublisherDTO> => {
    const updateProfile = await PublisherRepository.DeletePublisher(
      publisherID
    );
    return updateProfile;
  },
  GetPublisher: async (publisherID: string): Promise<PublisherDTO | null> => {
    const profile = await PublisherRepository.GetPublisher(publisherID);
    return profile;
  },
};

export { PublisherDomain };
