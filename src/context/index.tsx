import React, { createContext, useState, ReactNode } from "react";

interface Country {
  cca3: string;
  name: { common: string };
  capital: string[];
  // Add other fields as needed
}

interface CountryContextProps {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
  selectedCountry: Country | null;
  setSelectedCountry: React.Dispatch<React.SetStateAction<Country | null>>;
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
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <CountryContext.Provider
      value={{ countries, setCountries, selectedCountry, setSelectedCountry }}
    >
      {children}
    </CountryContext.Provider>
  );
};
