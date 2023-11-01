import React, { createContext, useContext, useCallback, useState } from "react";
import { fetchCountries } from "../api/countryApi";
import { CountryContext } from "./countryContext";

interface SearchContextProps {
  handleSearch: (debouncedSearchValue: string) => void;
  loading: boolean;
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
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(
    async (debouncedSearchValue: string) => {
      setLoading(true);
      if (debouncedSearchValue) {
        const result = await fetchCountries(debouncedSearchValue);
        setLoading(false);
        if (result.error) {
          setError(result.error);
          setCountries([]);
          setSelectedCountry(null);
        } else {
          setCountries(result.data);
          setError(null);
        }
      } else {
        setLoading(false);
        setCountries([]);
        setSelectedCountry(null);
        setError(null);
      }
    },
    [setCountries, setSelectedCountry, setError]
  );

  return (
    <SearchContext.Provider value={{ handleSearch, loading }}>
      {children}
    </SearchContext.Provider>
  );
};
