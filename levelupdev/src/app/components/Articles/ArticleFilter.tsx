"use client";

import React from "react";
import CategoryFilter from "./CategoryFilter";
import AuthorFilter from "./AuthorFilter";

const ArticleFilter = () => {
  return (
    <div className="border border-[##6D757A]-500 p-10 rounded-lg">
      <CategoryFilter />
      <AuthorFilter />
    </div>
  );
};
export default ArticleFilter;
