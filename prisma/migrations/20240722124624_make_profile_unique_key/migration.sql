/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Profile_type_key" ON "Profile"("type");
