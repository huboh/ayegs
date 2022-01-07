import './search-results.scss';
import { FC } from 'react';
import SearchResult, { SearchResultProp } from './SearchResult';

export interface SearchResultsProp {
  searchTerm: string;
  results: undefined | Array<SearchResultProp>;
}

const SearchResults: FC<SearchResultsProp> = ({ searchTerm, results }) => {
  if (!searchTerm) return null;

  return (
    <div className='search-results-wrapper'>
      <p>{ searchTerm }</p>
      { results && (
        <ul className='results-wrapper'>
          { results.map(({ result }) => (
            <li>
              <SearchResult result={ result } />
            </li>
          )) }
        </ul>
      ) }
    </div>
  );
};

export default SearchResults;