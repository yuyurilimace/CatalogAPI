import { app } from "./expressConfig";
const port = 3001;

const StartCatalogApi = () => {
  app.listen(port, () => {
    console.log(`API Listening on port ${port}`);
  });
};

StartCatalogApi();
