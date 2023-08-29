-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jcoin" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "redeemedById" INTEGER,

    CONSTRAINT "Jcoin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_nickname_key" ON "User"("nickname");

-- CreateIndex
CREATE UNIQUE INDEX "Jcoin_token_key" ON "Jcoin"("token");

-- AddForeignKey
ALTER TABLE "Jcoin" ADD CONSTRAINT "Jcoin_redeemedById_fkey" FOREIGN KEY ("redeemedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
