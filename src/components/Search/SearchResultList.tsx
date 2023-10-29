import React, { useContext } from "react";
import { CountryContext } from "../../context";

function SearchResultList() {
  const { countries, setSelectedCountry } = useContext(CountryContext)!;

  console.log("xxx---->", countries);

  return (
    <div>
      {countries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 bg-slate-50 mt-5 rounded-lg shadow-md p-4 transition ease-in-out overflow-y-scroll max-h-60">
          {countries.map((country, index) => (
            <div key={index} onClick={() => setSelectedCountry(country)}>
              <div className="flex items-center rounded-md  cursor-pointer hover:shadow-lg transition ease-in-out p-2 mt-1">
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
      ) : null}
    </div>
  );
}

export default SearchResultList;
