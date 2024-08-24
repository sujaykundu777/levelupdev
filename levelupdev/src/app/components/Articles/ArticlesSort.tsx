import React from "react";
import { ArticleSortTypes } from "@/types/articleslist";

const ArticlesSort = ({
  setActiveSort,
  activeSort,
}: {
  setActiveSort: (val: ArticleSortTypes) => void;
  activeSort: ArticleSortTypes;
}) => {
  return (
    <div className=" w-[100%] inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        onClick={() => setActiveSort("Newest")}
        className={`w-[25%] md:w-20 py-2 ${
          activeSort === "Newest" && "text-[#3ED7F5]"
        } text-sm font-medium bg-[#1F2937] border border-gray-200 rounded-s-lg hover:bg-[#3ED7F5] hover:text-[#101827]`}
      >
        Newest
      </button>
      <button
        type="button"
        onClick={() => setActiveSort("Oldest")}
        className={`w-[25%] md:w-20 py-2 ${
          activeSort === "Oldest" && "text-[#3ED7F5]"
        } text-sm font-medium bg-[#1F2937] border border-gray-200 hover:bg-[#3ED7F5] hover:text-[#101827] focus:z-10`}
      >
        Oldest
      </button>
      <button
        type="button"
        onClick={() => setActiveSort("A-Z")}
        className={`w-[25%] md:w-20 py-2 ${
          activeSort === "A-Z" && "text-[#3ED7F5]"
        } text-sm font-medium bg-[#1F2937] border border-gray-200 hover:bg-[#3ED7F5] hover:text-[#101827] focus:z-10`}
      >
        A-Z
      </button>
      <button
        type="button"
        onClick={() => setActiveSort("Z-A")}
        className={`w-[25%] md:w-20 py-2 ${
          activeSort === "Z-A" && "text-[#3ED7F5]"
        } text-sm font-medium bg-[#1F2937] border border-gray-200 rounded-e-lg hover:bg-[#3ED7F5] hover:text-[#101827] focus:z-10`}
      >
        Z-A
      </button>
    </div>
  );
};

export default ArticlesSort;
