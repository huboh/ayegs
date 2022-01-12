import './search-results.scss';
import { FC } from 'react';
import useNetworkInformation from '../../../../hooks/useNetworkInformation';

export interface SearchResultsProp {
  searchTerm: string;
  searchResults: undefined | Array<SearchResultProp>;
}

export interface SearchResultProp {
  result: {
    ProductTitle: string;
    imageSource: string;
    category?: string;
    link: string;
  };
}

export const SearchResult: FC<SearchResultProp> = ({ result: { link } }) => {
  return (
    <li>
      <a href={ link } className="search-result">s</a>
    </li>
  );
};

const SearchResults: FC<SearchResultsProp> = ({ searchResults, searchTerm }) => {
  const networkStaus = useNetworkInformation();
  let error: string;

  if (!searchTerm || searchTerm.length < 3) {
    error = searchTerm.length < 3 ? 'please enter at least 3 characters to search' : 'you have\'nt search for any thing yet!!!';

    return (
      <div className='search-results'>
        <p className='info-text'>{ error }</p>
      </div>
    );
  }

  if (!(networkStaus.isOnline)) {
    return (
      <div className='search-results'>
        <p className='info-text'>{ 'seems like you\'re offline 📴' }</p>
      </div>
    );
  }

  return (
    <div className='search-results'>
      { !searchResults?.length ? <p className='info-text'>no result 🤫</p> : (
        <ul className='search-results-wrapper'>
          { searchResults.map(({ result }) => <SearchResult result={ result } />) }
        </ul>
      ) }
    </div>
  );
};

export default SearchResults;