/*
  Warnings:

  - The primary key for the `BookCollection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `BookCollection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BookCollection" DROP CONSTRAINT "BookCollection_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "BookCollection_pkey" PRIMARY KEY ("userId", "volumeId");
