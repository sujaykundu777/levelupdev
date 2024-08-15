"use client";
import React, { useState } from "react";
import MultiSelectCheckbox from "../common/MultiSelectCheckbox";

const CategoryFilter = () => {
  const categoryNames: string[] = [
    "Frontend",
    "Backend",
    "DevOps",
    "Mobile",
    "Design",
  ];
  const [selectedCategories, setCategoriesFilter] = useState<string[]>([]);

  //  if (data) {
  //    const categories = data.categories;
  //    categories.map((category: any) => {
  //      categoryNames.push(category.categoryName);
  //    });
  //  }

  return (
    <div className="mb-6">
      <h2 className="pb-2">Filter by Categories</h2>
      <hr className="pt-4" />
      <MultiSelectCheckbox
        options={categoryNames}
        selectedOptions={selectedCategories}
        setSelectedOptions={setCategoriesFilter}
      />
    </div>
  );
};
export default CategoryFilter;
