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
    const updatedTitle = await TitleRepository.UpdateTitle(uptadeUser);
    return updatedTitle;
  },

  DeleteTitle: async (titleId: string) => {
    if (titleId) {
      const deletedTitle = await TitleRepository.DeleteTitle(titleId);
      return deletedTitle;
    }
    throw new Error("id inválido");
  },

  GetTitle: async (titleId: string) => {
    if (titleId) {
      const title = await TitleRepository.GetTitle(titleId);
      return title;
    }
    throw new Error("id inválido");
  },
};
