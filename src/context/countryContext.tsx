import React, { createContext, useState, ReactNode } from "react";
import { countryListDetail } from "../types/main";

interface CountryContextProps {
  countries: countryListDetail[];
  setCountries: React.Dispatch<React.SetStateAction<countryListDetail[]>>;
  selectedCountry: countryListDetail | null;
  setSelectedCountry: React.Dispatch<
    React.SetStateAction<countryListDetail | null>
  >;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

interface CountryProviderProps {
  children: ReactNode;
}

export const CountryContext = createContext<CountryContextProps | undefined>(
  undefined
);

export const CountryProvider: React.FC<CountryProviderProps> = ({
  children,
}) => {
  const [countries, setCountries] = useState<countryListDetail[]>([]);
  const [selectedCountry, setSelectedCountry] =
    useState<countryListDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        selectedCountry,
        setSelectedCountry,
        error,
        setError,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
