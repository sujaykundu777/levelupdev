"use client";
import React from "react";
import CardPagination from "../common/Pagination/CardPagination";
import { ArticlesPaginationGridProps } from "@/types/articleslist";

export interface ImageType {
  id: string;
  fileName: string;
  mimeType: string;
  size: number;
  url: string;
  width: number;
  height: number;
  altText: string;
}

export interface AuthorType {
  id: string;
  name: string;
  title: string;
  biography: string;
  picture: ImageType;
}
export interface CategoryType {
  categoryId: string;
  categoryName: string;
  categorySlug: string;
}

export interface PostType {
  id: string;
  title: string;
  slug: string;
  author: AuthorType;
  category: CategoryType[];
  excerpt: string;
  content: {
    html: string;
  };
  date: string;
  coverImage: ImageType;
  published: boolean;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

const ArticlesPaginationGrid = ({
  articles,
  cardView,
  filters,
  searchInput,
  activeSort,
  isError,
  error,
  CardComponent,
}: ArticlesPaginationGridProps) => {
  const posts = articles;

  let filteredData = [];

  if (posts && posts.length > 0) {
    // if no filters return all the posts
    if (filters.categories.length === 0 && filters.authors.length === 0) {
      filteredData = posts;
    }

    /* if filters exist, apply filters to posts */
    // if filters.categories exist, filter posts by categories
    if (filters.categories && filters.categories.length > 0) {
      // return all the posts whose post.category.categoryName is in filters.categories
      filteredData = posts.filter((post: PostType) => {
        const postCategories: string[] = post.category.map(
          (category) => category.categoryName
        );
        return filters.categories.some((category) =>
          postCategories.includes(category)
        );
      });
    }

    // if filters.author exist, filter posts by author
    if (filters.authors && filters.authors.length > 0) {
      filteredData = posts.filter((post: PostType) => {
        return filters.authors.includes(post.author.name);
      });
    }

    // filter data based on search
    if (searchInput && searchInput.length > 3) {
      filteredData = posts.filter((post: PostType) => {
        return post.title.toLowerCase().includes(searchInput.toLowerCase());
      });
    }

    // sort data
    if (activeSort === "Newest") {
      filteredData = filteredData.sort((a: PostType, b: PostType) => {
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      });
    } else if (activeSort === "Oldest") {
      filteredData = filteredData.sort((a: PostType, b: PostType) => {
        return (
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        );
      });
    } else if (activeSort === "A-Z") {
      filteredData = filteredData.sort((a: PostType, b: PostType) => {
        return a.title.localeCompare(b.title);
      });
    } else if (activeSort === "Z-A") {
      filteredData = filteredData.sort((a: PostType, b: PostType) => {
        return b.title.localeCompare(a.title);
      });
    } else {
      console.log("no sorting");
    }
  }

  return (
    <div>
      <CardPagination
        data={filteredData}
        isError={isError}
        errorMessage={error ? error?.message : ""}
        itemsPerPageOptions={[
          {
            id: "1",
            value: "10",
            name: "10",
          },
        ]}
        itemsPerPageText="Items Per Page"
        prevPageLabel="Previous"
        nextPageLabel="Next"
        pageLabel="Page"
        alignment={cardView}
        shouldResetPage={false}
        CardComponent={CardComponent}
      />
    </div>
  );
};

export default ArticlesPaginationGrid;
