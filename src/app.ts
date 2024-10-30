import { app, jsonBodyConfig } from "./expressConfig";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import { UserRoutes } from "./routes/userRoutes";
import { ProfileRoutes } from "./routes/profileRoutes";

const port = 3001;
const prismaClient = new PrismaClient();

const StartCatalogApi = () => {
  app.use(jsonBodyConfig);

  app.use("/user", UserRoutes());
  app.use("/profile", ProfileRoutes());

  app.listen(process.env.PORT, () => {
    console.log(`API Listening on port ${port}`);
  });
};

StartCatalogApi();
