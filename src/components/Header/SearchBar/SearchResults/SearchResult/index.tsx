import { FC } from "react";

export interface SearchResultProp {
  result: {
    ProductTitle: string;
    imageSource: string;
    category?: string;
    link: string;
  };
}

const SearchResult: FC<SearchResultProp> = ({ result: { link } }) => {

  return (
    <a href={ link } className="search-result">s</a>
  );
};

export default SearchResult;