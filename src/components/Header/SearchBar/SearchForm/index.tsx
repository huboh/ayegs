import './searchForm.scss';
import { useRef, FC, SyntheticEvent } from "react";

import { ReactComponent as SearchIcon } from './search.svg';

interface SearchFormProps {
  placeholder?: string;
  onSubmit?: (input: string) => void;
  onInput: (input: string) => void;
}

const formDefaultPlaceHolder = 'search products, brands & category';

const SearchForm: FC<SearchFormProps> = ({ onInput, onSubmit, placeholder = formDefaultPlaceHolder }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit?.(inputRef.current?.value!);
  };

  const handleInput = () => {
    onInput(inputRef.current?.value!);
  };

  return (
    <form className='search-form' onSubmit={ handleSubmit }>
      <input type="text" ref={ inputRef } className="search-form-input" placeholder={ placeholder } onInput={ handleInput } />
      <SearchIcon className='search-icon' />
    </form>
  );
};

export default SearchForm;