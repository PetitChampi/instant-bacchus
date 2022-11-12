-- CreateTable
CREATE TABLE "Drink" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL,
    "deletedAt" TEXT,

    CONSTRAINT "Drink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FoodItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "calories" INTEGER NOT NULL,
    "deletedAt" TEXT,

    CONSTRAINT "FoodItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Allergies" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "deletedAt" TEXT,

    CONSTRAINT "Allergies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AllergiesToFoodItem" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
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

-- AddForeignKey
ALTER TABLE "_AllergiesToFoodItem" ADD CONSTRAINT "_AllergiesToFoodItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Allergies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AllergiesToFoodItem" ADD CONSTRAINT "_AllergiesToFoodItem_B_fkey" FOREIGN KEY ("B") REFERENCES "FoodItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
