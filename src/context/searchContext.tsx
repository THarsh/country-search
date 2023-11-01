import React, { createContext, useContext, useCallback } from "react";
import { fetchCountries } from "../api/countryApi";
import { CountryContext } from "./countryContext";

interface SearchContextProps {
  handleSearch: (debouncedSearchValue: string) => void;
}

interface SearchProviderProps {
  children: React.ReactNode;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const { setCountries, setSelectedCountry, setError } =
    useContext(CountryContext)!;

  const handleSearch = useCallback(
    async (debouncedSearchValue: string) => {
      if (debouncedSearchValue) {
        const result = await fetchCountries(debouncedSearchValue);
        if (result.error) {
          setError(result.error);
          setCountries([]);
          setSelectedCountry(null);
        } else {
          setCountries(result.data);
          setError(null);
        }
      } else {
        setCountries([]);
        setSelectedCountry(null);
        setError(null);
      }
    },
    [setCountries, setSelectedCountry, setError]
  );

  return (
    <SearchContext.Provider value={{ handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
