import { FC } from 'react';
import { searchables } from '../index';
import SearchResults, { SearchResultsProp } from '../SearchResults';
import Searchables, { SearchableProp, SearchablesProps, SearchableTerm } from '../Searchables';

export interface SearchMetaInfoProps {
  searchTerm: string;
  displayMetaInfo: boolean;
  searchTermScope: SearchableProp['title'];
  searchResults: SearchResultsProp['searchResults'];
  onSearchableSelect: (selectedSearchable: SearchableTerm) => void;
}

const SearchMetaInfo: FC<SearchMetaInfoProps> = (props) => {
  const { displayMetaInfo, searchTerm, searchResults, searchTermScope, onSearchableSelect } = props;

  const searchResultsProps: SearchResultsProp = { searchTerm, searchResults };
  const searchablesProps: SearchablesProps = { searchTermScope, searchables, onSearchableSelect };

  return !displayMetaInfo ? null : (
    <div className='search-meta-info'>
      <Searchables { ...searchablesProps } />
      <SearchResults { ...searchResultsProps } />
    </div>
  );
};

export default SearchMetaInfo;