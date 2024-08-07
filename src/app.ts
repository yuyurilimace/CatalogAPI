import { app } from "./expressConfig";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const port = 3001;
const prismaClient = new PrismaClient();

const StartCatalogApi = () => {
  app.listen(process.env.PORT, () => {
    console.log(`API Listening on port ${port}`);
  });
};

StartCatalogApi();
