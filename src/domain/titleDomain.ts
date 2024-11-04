import { TitleDTO } from "../DTO/TitleDTO";
import { TitleRepository } from "../repository/titleRepository";

export const TitleDomain = {
  CreateNewTitle: async ({
    name,
    author,
    finished,
    publisher: { name: publisherName = "", id: publisherId },
    releasedVolumes,
  }: TitleDTO) => {
    const createdTitle = await TitleRepository.CreateTitle({
      name,
      author,
      finished,
      publisher: { name: publisherName, id: publisherId },
      releasedVolumes,
    });
    return createdTitle;
  },

  UpdateNewTitle: async ({
    name,
    author,
    finished,
    publisher: { name: publisherName = "", id: publisherId },
    id,
  }: TitleDTO) => {
    const uptadeUser = {
      name,
      author,
      finished,
      publisher: { name: publisherName, id: publisherId },
      id,
    };
    const updatedUser = await TitleRepository.UpdateTitle(uptadeUser);
    return updatedUser;
  },

  DeleteTitle: async (titleId: string) => {
    const deletedUser = await TitleRepository.DeleteTitle(titleId);
    return deletedUser;
  },

  GetTitle: async (titleId: string) => {
    const title = await TitleRepository.GetTitle(titleId);
    return title;
  },
};
