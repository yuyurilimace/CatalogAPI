/*
  Warnings:

  - A unique constraint covering the columns `[publisherId,name]` on the table `Title` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Title_publisherId_name_key" ON "Title"("publisherId", "name");
