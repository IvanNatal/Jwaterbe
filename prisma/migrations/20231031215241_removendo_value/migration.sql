/*
  Warnings:

  - You are about to drop the column `value` on the `Jcoin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Jcoin" DROP COLUMN "value",
ALTER COLUMN "redeemed" SET DEFAULT false;
