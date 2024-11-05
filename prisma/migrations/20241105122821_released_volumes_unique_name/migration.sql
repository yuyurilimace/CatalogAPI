/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `ReleasedVolumes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ReleasedVolumes_name_key" ON "ReleasedVolumes"("name");
