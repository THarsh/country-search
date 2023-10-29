import React, { createContext, useState, ReactNode } from "react";
import { countryListDetail } from "../types/mian";

interface CountryContextProps {
  countries: countryListDetail[];
  setCountries: React.Dispatch<React.SetStateAction<countryListDetail[]>>;
  selectedCountry: countryListDetail | null;
  setSelectedCountry: React.Dispatch<
    React.SetStateAction<countryListDetail | null>
  >;
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

  return (
    <CountryContext.Provider
      value={{ countries, setCountries, selectedCountry, setSelectedCountry }}
    >
      {children}
    </CountryContext.Provider>
  );
};
