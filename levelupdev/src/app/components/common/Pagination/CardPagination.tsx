"use client";
import { useState } from "react";
// import ArticleCard from "../../Articles/ArticleCard";
import PaginationFooter from "./PaginationFooter";
// import { PostType } from "@/types/blog";
import CustomCard from "./CustomCard";

interface ItemsPerPageOption {
  id: string;
  value: string;
  name: string;
}

interface CardPaginationProps {
  data: any[];
  isError: boolean;
  errorMessage: string;
  itemsPerPageOptions: ItemsPerPageOption[];
  itemsPerPageText: string;
  alignment: "grid" | "list";
  pageLabel: string;
  prevPageLabel: string;
  nextPageLabel: string;
  shouldResetPage: boolean;
  CardComponent?: any;
}

const CardPagination = ({
  data,
  isError,
  errorMessage,
  itemsPerPageOptions,
  itemsPerPageText,
  alignment,
  pageLabel,
  prevPageLabel,
  nextPageLabel,
  shouldResetPage,
  CardComponent,
}: CardPaginationProps) => {
  console.log("data", data);
  const ArticleCardComp: React.ComponentType<any> = CardComponent || null;

  const [articlePerPage, setArticlePerPage] = useState(6);

  const [currentPageData, setCurrentPageData] = useState<any[]>(data);

  const handlePageChange = (pageCards: any[]) => {
    setCurrentPageData(pageCards);
  };

  return (
    <div className="bg-[#101827] px-10 justify-between">
      {isError && (
        <div> {errorMessage || "Error occured while loading articles"}</div>
      )}
      <div
        className={`pt-2 w-[100%] grid gap-10 ${
          alignment === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : null
        }`}
      >
        {!isError &&
          data &&
          currentPageData.length &&
          currentPageData?.map((item: any) => (
            <div>
              {ArticleCardComp ? (
                <ArticleCardComp
                  key={item.id}
                  cardData={item}
                  navPath="/guides"
                  articlesView={alignment}
                />
              ) : (
                <CustomCard
                  key={item.id}
                  cardData={item}
                  navPath="/guides"
                  articlesView={alignment}
                />
              )}
            </div>
          ))}
      </div>

      <hr className="mt-12 mb-4" />
      <div className="w-[100%] grid gap-10">
        {!isError && data && (
          <PaginationFooter
            data={data}
            itemsLabel="Items"
            itemsPerPageOptions={itemsPerPageOptions}
            itemsPerPageText={itemsPerPageText}
            pageLabel={pageLabel}
            prevPageLabel={prevPageLabel}
            nextPageLabel={nextPageLabel}
            handlePageChange={handlePageChange}
            shouldResetPage={shouldResetPage}
          />
        )}
      </div>
    </div>
  );
};

export default CardPagination;
