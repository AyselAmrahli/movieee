import { FC, createContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const defaultValue: SearchContextProps = {
  searchValue: '',
  setSearchValue: () => {}
};

export const SearchContext = createContext<SearchContextProps>(defaultValue);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: FC<SearchProviderProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
