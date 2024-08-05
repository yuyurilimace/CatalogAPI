import { TitleDTO } from "../DTO/TitleDTO";
import { Title } from "../types/titleType";

export interface TitleRepository {
  CreateTitle: (title: Title) => Promise<Title>;
  UpdateTitle: (title: Title) => Promise<Title>;
  DeleteTitle: (titleId: string) => Promise<Title>;
  GetTitle: (titleId: string) => Promise<Title | null>;
}
