export type countryListDetail = {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
  };
  coatOfArms: {
    svg: string;
  };
  capital: string[];
  currencies: { [key: string]: { name: string; symbol: string } };
  car: {
    side: string;
  };
  continents: string;
  timezones: string;
};
