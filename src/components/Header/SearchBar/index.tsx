import './searchBar.scss';
import { FC, useState, useEffect, useRef } from 'react';

import { MdCategory, MdChair, MdPhoneAndroid, MdClose } from 'react-icons/md';
import { ReactComponent as SearchIcon } from './search.svg';

import SearchMetaInfo, { SearchMetaInfoProps } from './SearchMetaInfo';
import { SearchableProp, SearchableTerm } from './Searchables';
import SearchForm, { SearchFormProps } from './SearchForm';
import IconButton from '../../IconButton';

interface CloseFormButtonProps {
  display: boolean;
  onClick: VoidFunction;
}

interface SearchTermScopeProps {
  display: boolean;
  searchTermScope: SearchableTerm;
}

export const searchables: SearchableProp[] = [
  { title: 'products', Icon: MdPhoneAndroid },
  { title: 'brands', Icon: MdChair },
  { title: 'categories', Icon: MdCategory },
];

const CloseFormButton: FC<CloseFormButtonProps> = ({ display, onClick }) => {
  return !display ? null : (
    <IconButton className='close-btn' title="close" onClick={ onClick }>
      <MdClose className='close-btn-icon' />
    </IconButton>
  );
};

const SearchTermScope: FC<SearchTermScopeProps> = ({ searchTermScope, display }) => {
  return !display ? null : (
    <span className='selected-scope'>
      { searchTermScope }
    </span>
  );
};

const SearchBar: FC = () => {
  const searchBarRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [displayMetaInfo, setDisplayMetaInfo] = useState(false);
  const [searchTermScope, setSearchTermScope] = useState<SearchableProp['title']>('products');

  const searchTermScopeProps = {
    searchTermScope, display: displayMetaInfo, onClick: () => { }
  };

  const closeFormProps = {
    display: displayMetaInfo, onClick: () => {
      setSearchTerm('');
      setDisplayMetaInfo(false);
    }
  };

  const searchMetaInfoProps: SearchMetaInfoProps = {
    searchResults, searchTerm, searchTermScope, displayMetaInfo, onSearchableSelect: setSearchTermScope
  };

  const searchFormProps: SearchFormProps = {
    inputPlaceholder: `search for ${searchTermScope} in all of aora`, searchTerm,
    onFocus: () => setDisplayMetaInfo(true), onInput: (searchInput) => setSearchTerm(searchInput)
  };

  useEffect(() => {
    const getSearchResults = async () => setSearchResults([]);

    if (searchTerm) {
      console.log(searchTerm);
      getSearchResults();
    }

  }, [searchTerm]);

  return (
    <div className='search-form-wrapper' ref={ searchBarRef }>
      <SearchIcon className='search-icon' />
      <SearchTermScope { ...searchTermScopeProps } />
      <SearchForm { ...searchFormProps } />
      <CloseFormButton { ...closeFormProps } />
      <SearchMetaInfo { ...searchMetaInfoProps } />
    </div>
  );
};

export default SearchBar;