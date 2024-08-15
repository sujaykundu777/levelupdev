"use client";
import ArticleFilter from "./ArticleFilter";
import React, { useState } from "react";
import ArticlesSort from "./ArticlesSort";
import ArticlesSearch from "./ArticlesSearch";
import ArticlesView from "./ArticlesView";
import ArticleCard from "./ArticleCard";
import ArticlesPaginationGrid from "./ArticlesPaginationGrid";

import {
  ArticleSortTypes,
  ArticlesViewTypes,
  FilterProps,
} from "@/types/articleslist";

const ArticleList = ({
  title = "Articles",
  articles,
}: {
  title: string;
  articles: any[];
}) => {
  const [activeSort, setActiveSort] = useState<ArticleSortTypes>("Newest");
  const [searchInput, setSearchInput] = useState<string>("");
  const [articlesView, setArticlesView] = useState<ArticlesViewTypes>("grid");
  const [filters, setFilters] = useState<FilterProps>({
    categories: [],
    authors: [],
  });

  //   useEffect(() => {
  //     setFilters({
  //       ...filters,
  //       categories: selectedCategories,
  //     });
  //   }, [selectedCategories]);

  return (
    <div className="bg-[#101827] container-fluid py-2">
      {/* desktop view */}
      <h1 className="text-center text-2xl md:text-4xl hidden lg:block mt-20">
        {" "}
        {title}{" "}
      </h1>
      <div className="flex p-10">
        <div className="hidden lg:block lg:w-[24%]">
          <ArticleFilter />
        </div>
        <div className="hidden lg:block lg:w-[100%]">
          <div className="mx-10 my-2">
            <div className="flex space-x-2 justify-between">
              <div className="hidden lg:block">
                <ArticlesSort
                  setActiveSort={setActiveSort}
                  activeSort={activeSort}
                />
              </div>

              <div className="flex flex-row gap-4 ">
                <div>
                  <ArticlesSearch
                    setSearchInput={setSearchInput}
                    searchInput={searchInput}
                  />
                </div>
                <div className="pl-2">
                  <ArticlesView
                    setArticlesView={setArticlesView}
                    articlesView={articlesView}
                  />
                </div>
              </div>
            </div>
            <div className="my-2">
              <ArticlesPaginationGrid
                articles={articles}
                filters={filters}
                searchInput={searchInput}
                activeSort={activeSort}
                cardView={articlesView}
                isError={false}
                error={null}
                CardComponent={ArticleCard}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArticleList;
