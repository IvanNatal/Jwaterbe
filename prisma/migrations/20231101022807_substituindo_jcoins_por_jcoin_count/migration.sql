-- AlterTable
ALTER TABLE "Jcoin" ADD COLUMN     "redeenedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "jcoinCount" INTEGER NOT NULL DEFAULT 0;
