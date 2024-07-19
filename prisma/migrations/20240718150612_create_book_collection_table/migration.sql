-- CreateTable
CREATE TABLE "BookCollection" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "volumeId" TEXT NOT NULL,

    CONSTRAINT "BookCollection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookCollection" ADD CONSTRAINT "BookCollection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookCollection" ADD CONSTRAINT "BookCollection_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "ReleasedVolumes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
