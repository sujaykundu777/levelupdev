export type ArticleSortTypes = "Newest" | "Oldest" | "A-Z" | "Z-A"
export type ArticlesViewTypes = "grid" | "list"
export interface FilterProps {
  authors: string[];
  categories: string[];
}
export interface ArticlesPaginationGridProps {
  articles: any[];
  cardView: ArticlesViewTypes;
  filters: FilterProps;
  searchInput: string;
    activeSort: string;
    isError: boolean;
    error: any
    CardComponent?: any;
}