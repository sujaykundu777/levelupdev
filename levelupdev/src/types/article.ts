export interface AuthorProps {
        name?: string;
        picture?: string;
    };
export interface ArticleProps {
  author?: AuthorProps;
  description?: string;
  coverImage?: string;
  publishedAt: string;
  slug: string;
  status: string;
  title: string;
  content: string;
}

export interface ArticleCardProps {
  cardData: ArticleProps;
    articlesView: string;
    navPath: string
}