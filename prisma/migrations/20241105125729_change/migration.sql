/*
  Warnings:

  - The primary key for the `BookCollection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `BookCollection` table. All the data in the column will be lost.
  - You are about to drop the column `volumeId` on the `BookCollection` table. All the data in the column will be lost.
  - You are about to drop the column `titleId` on the `ReleasedVolumes` table. All the data in the column will be lost.
  - You are about to drop the column `publisherId` on the `Title` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[publisher_id,name]` on the table `Title` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `BookCollection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `volume_id` to the `BookCollection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title_id` to the `ReleasedVolumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisher_id` to the `Title` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profile_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BookCollection" DROP CONSTRAINT "BookCollection_userId_fkey";

-- DropForeignKey
ALTER TABLE "BookCollection" DROP CONSTRAINT "BookCollection_volumeId_fkey";

-- DropForeignKey
ALTER TABLE "ReleasedVolumes" DROP CONSTRAINT "ReleasedVolumes_titleId_fkey";

-- DropForeignKey
ALTER TABLE "Title" DROP CONSTRAINT "Title_publisherId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileId_fkey";

-- DropIndex
DROP INDEX "Title_publisherId_name_key";

-- AlterTable
ALTER TABLE "BookCollection" DROP CONSTRAINT "BookCollection_pkey",
DROP COLUMN "userId",
DROP COLUMN "volumeId",
ADD COLUMN     "user_id" TEXT NOT NULL,
ADD COLUMN     "volume_id" TEXT NOT NULL,
ADD CONSTRAINT "BookCollection_pkey" PRIMARY KEY ("user_id", "volume_id");

-- AlterTable
ALTER TABLE "ReleasedVolumes" DROP COLUMN "titleId",
ADD COLUMN     "title_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Title" DROP COLUMN "publisherId",
ADD COLUMN     "publisher_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profileId",
ADD COLUMN     "profile_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Title_publisher_id_name_key" ON "Title"("publisher_id", "name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Title" ADD CONSTRAINT "Title_publisher_id_fkey" FOREIGN KEY ("publisher_id") REFERENCES "Publisher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReleasedVolumes" ADD CONSTRAINT "ReleasedVolumes_title_id_fkey" FOREIGN KEY ("title_id") REFERENCES "Title"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookCollection" ADD CONSTRAINT "BookCollection_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookCollection" ADD CONSTRAINT "BookCollection_volume_id_fkey" FOREIGN KEY ("volume_id") REFERENCES "ReleasedVolumes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
