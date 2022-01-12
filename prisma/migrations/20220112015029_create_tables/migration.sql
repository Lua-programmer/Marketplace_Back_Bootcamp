-- CreateTable
CREATE TABLE "_CompanyToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToProduct_AB_unique" ON "_CompanyToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToProduct_B_index" ON "_CompanyToProduct"("B");

-- AddForeignKey
ALTER TABLE "_CompanyToProduct" ADD FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToProduct" ADD FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
