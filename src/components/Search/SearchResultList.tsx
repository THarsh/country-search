import React, { useContext } from "react";
import { CountryContext } from "../../context";
import ErrorBox from "../ErrorBox";

function SearchResultList() {
  const { error, countries, setSelectedCountry } = useContext(CountryContext)!;

  return (
    <>
      {countries.length > 0 ? (
        <div className="grid  bg-slate-50 mt-5 rounded-lg shadow-md p-6 transition ease-in-out ">
          <div className="overflow-auto max-h-60">
            {countries.map((country, index) => (
              <div key={index} onClick={() => setSelectedCountry(country)}>
                <div className="group flex items-center rounded-md cursor-pointer transition ease-in-out p-2 mt-1">
                  <img
                    src={country.flags.svg}
                    alt="flag"
                    className="w-9 h-5 mr-4 rounded transition-transform transform group-hover:scale-105"
                  />
                  <p className="text-sm font-normal group-hover:font-bold">
                    {country.name.common}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {error! ? <ErrorBox /> : null}
    </>
  );
}

export default SearchResultList;
