/*
  Warnings:

  - You are about to drop the column `booked` on the `Cars_table` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Cars_table` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cars_table" DROP COLUMN "booked",
DROP COLUMN "image";

-- CreateTable
CREATE TABLE "Cars" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")
);
