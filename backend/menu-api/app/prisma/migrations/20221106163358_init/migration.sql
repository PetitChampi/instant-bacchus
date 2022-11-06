-- CreateTable
CREATE TABLE "Drink" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "FoodItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Allergies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AllergiesToFoodItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AllergiesToFoodItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergies" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AllergiesToFoodItem_B_fkey" FOREIGN KEY ("B") REFERENCES "FoodItem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Drink_name_key" ON "Drink"("name");

-- CreateIndex
CREATE UNIQUE INDEX "FoodItem_name_key" ON "FoodItem"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Allergies_name_key" ON "Allergies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_AllergiesToFoodItem_AB_unique" ON "_AllergiesToFoodItem"("A", "B");

-- CreateIndex
CREATE INDEX "_AllergiesToFoodItem_B_index" ON "_AllergiesToFoodItem"("B");
