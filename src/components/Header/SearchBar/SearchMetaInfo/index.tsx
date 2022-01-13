import { FC } from 'react';

import './search-meta-info.scss';
import { searchables } from '../index';
import SearchResults, { SearchResultsProp } from '../SearchResults';
import Searchables, { SearchableProp, SearchablesProps, SearchableTerm } from '../Searchables';

import useAnimatedComponent from '../../../../hooks/useAnimatedComponent';

export interface SearchMetaInfoProps {
  searchTerm: string;
  displayMetaInfo: boolean;
  searchTermScope: SearchableProp['title'];
  searchResults: SearchResultsProp['searchResults'];
  onSearchableSelect: (selectedSearchable: SearchableTerm) => void;
}

const SearchMetaInfo: FC<SearchMetaInfoProps> = (props) => {
  const { displayMetaInfo, searchTerm, searchResults, searchTermScope, onSearchableSelect } = props;
  const [Container] = useAnimatedComponent({ display: displayMetaInfo, className: 'search-meta-info' });

  const searchResultsProps: SearchResultsProp = { searchTerm, searchResults };
  const searchablesProps: SearchablesProps = { searchTermScope, searchables, onSearchableSelect };

  return (
    <Container>
      <Searchables { ...searchablesProps } />
      <SearchResults { ...searchResultsProps } />
    </Container>
  );
};

export default SearchMetaInfo;