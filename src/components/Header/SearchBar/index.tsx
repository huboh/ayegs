import './searchBar.scss';

import { FC, useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const SearchBar: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setSearchResults] = useState([]);


  useEffect(() => {
    const getSearchResults = () => setSearchResults([]);

    if (searchTerm) {
      console.log(searchTerm);
      getSearchResults();
    }

  }, [searchTerm]);


  return (
    <div className='search-form-wrapper' style={ { marginLeft: 'auto' } }>
      <SearchForm onInput={ (searchInput) => setSearchTerm(searchInput.trim()) } />
      <SearchResults { ...{ results, searchTerm } } />
    </div>
  );
};

export default SearchBar;