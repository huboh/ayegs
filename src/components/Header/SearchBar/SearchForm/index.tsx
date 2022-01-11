import './searchForm.scss';
import { useRef, FC, SyntheticEvent } from "react";
import useEventListener from '../../../../hooks/useEventListener';

export interface SearchFormProps {
  searchTerm: string;
  inputPlaceholder: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onSubmit?: (input: string) => void;
  onInput: (input: string) => void;
}

const SearchForm: FC<SearchFormProps> = ({ onInput, onSubmit, inputPlaceholder, onBlur, onFocus, searchTerm }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEventListener({
    target: inputRef,
    eventType: ['focus', 'blur', 'input'],

    eventHandler(event) {
      switch (event.type) {
        case 'blur': return onBlur?.();
        case 'focus': return onFocus?.();
        case 'input': return onInput((event as any).target.value);
        default: break;
      }
    }
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit?.(inputRef.current?.value!);
  };

  return (
    <form className='search-form' onSubmit={ handleSubmit }>
      <input
        type="text"
        ref={ inputRef }
        className="search-form-input"
        placeholder={ inputPlaceholder }
        value={ searchTerm }
        onChange={ e => e }
      />
    </form>
  );
};

export default SearchForm;