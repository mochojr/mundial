/*
  Warnings:

  - Added the required column `genre` to the `mundial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mundial" ADD COLUMN     "genre" TEXT NOT NULL;
