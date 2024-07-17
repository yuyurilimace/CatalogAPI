const expressApp = require("./expressConfig");
const port = 3001;

const StartCatalogApi = () => {
  expressApp.listen(port, () => {
    console.log(`API Listening on port ${port}`);
  });
};

StartCatalogApi();
