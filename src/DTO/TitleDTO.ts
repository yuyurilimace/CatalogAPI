import { Title } from "../types/titleType";
import { PublisherDTO } from "./publisherDTO";

type ReleasedVolumes = {
  id: string;
  name: string;
};

type TitleDTO = Omit<Title, "releasedVolumes" | "publisher"> & {
  publisher: PublisherDTO;
  releasedVolumes?: ReleasedVolumes[];
};

export { TitleDTO };
