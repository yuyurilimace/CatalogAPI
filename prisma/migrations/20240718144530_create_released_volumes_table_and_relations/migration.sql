/*
  Warnings:

  - Added the required column `finished` to the `Title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Title" ADD COLUMN     "finished" BOOLEAN NOT NULL;

-- CreateTable
CREATE TABLE "ReleasedVolumes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "titleId" TEXT NOT NULL,

    CONSTRAINT "ReleasedVolumes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReleasedVolumes" ADD CONSTRAINT "ReleasedVolumes_titleId_fkey" FOREIGN KEY ("titleId") REFERENCES "Title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
