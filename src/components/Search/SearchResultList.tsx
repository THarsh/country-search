import React, { useContext } from "react";
import { CountryContext } from "../../context";

function SearchResultList() {
  const { countries, setSelectedCountry } = useContext(CountryContext)!;

  console.log("xxx---->", countries);

  return (
    <div>
      {countries.map((country, index) => (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 bg-slate-50 mt-5"
          key={index}
          onClick={() => setSelectedCountry(country)}
        >
          <div className="flex items-center p-4 border-2 border-gray-300 rounded-md">
            <img
              src={country.flags.svg}
              alt="flag"
              className="w-16 h-10 mr-4 rounded"
            />
            <p className="text-lg font-semibold">{country.name.common}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResultList;
