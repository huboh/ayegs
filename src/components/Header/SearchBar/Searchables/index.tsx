import './searchables.scss';
import { FC, SVGProps } from 'react';

export type SearchableTerm = 'brands' | 'products' | 'categories';

export interface SearchableProp {
  title: SearchableTerm;
  Icon: FC<SVGProps<SVGSVGElement> & { title?: string | undefined; }>;
};

export interface SearchableProps extends SearchableProp {
  selected: boolean;
  onClick: (searchable: SearchableProp['title']) => void;
};

export interface SearchablesProps {
  onSearchableSelect: (searchable: SearchableTerm) => void;
  searchTermScope: SearchableTerm;
  searchables: SearchableProp[];
}

const Searchable: FC<SearchableProps> = ({ Icon, title, selected, onClick }) => {
  return (
    <li>
      <button className={ `searchable button ${selected ? 'selected' : ''}`.trim() } title={ title } onClick={ () => onClick(title) }>
        <Icon className='searchable-icon' />
        <span className='searchable-text'>{ title }</span>
      </button>
    </li>
  );
};

const Searchables: FC<SearchablesProps> = ({ searchables, searchTermScope, onSearchableSelect }) => {
  return (
    <div className='searchables-wrapper'>
      <p>search for :</p>
      <ul className='searchables-list-wrapper'>
        { searchables.map(searchable => (
          <Searchable { ...{ ...searchable, onClick: onSearchableSelect, selected: searchTermScope === searchable.title, key: searchable.title } } />
        )) }
      </ul>
    </div>
  );
};

export default Searchables;