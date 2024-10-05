/*
  Warnings:

  - Added the required column `groupId` to the `Meetings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Meetings" ADD COLUMN     "groupId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Meetings" ADD CONSTRAINT "Meetings_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
