import { ChangeEvent, FC, memo } from 'react';

import './index.scss';

type SearchFieldProps = {
  placeholder?: string;
  defaultValue?: string;
  onChange: any;
};

const SearchField: FC<SearchFieldProps> = ({ placeholder = '', defaultValue = '', onChange }) => (
  <div className="app-search-field">
    <input type="text" value={defaultValue} placeholder={placeholder} onChange={onChange} />
  </div>
);

export default memo(SearchField);
