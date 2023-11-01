import React, { useContext } from "react";
import { CountryContext } from "../../context/countryContext";
import ErrorBox from "../ErrorBox";

function SearchResultList() {
  const { error, countries, setSelectedCountry, setCountries } =
    useContext(CountryContext)!;
  const clearResult = () => {
    setCountries([]);
  };
  return (
    <>
      {countries.length > 0 ? (
        <div className="grid  bg-slate-50 mt-5 rounded-lg shadow-md  transition ease-in-out ">
          <div className="px-4 pt-4 pb-4 flex justify-between">
            <p className=" text-sm font-medium">Search Result</p>
            <p
              onClick={clearResult}
              className="text-sm font-extralight cursor-pointer text-slate-400 hover:text-slate-900 "
            >
              Clear Result
            </p>
          </div>
          <div className="overflow-auto max-h-60">
            {countries.map((country, index) => (
              <div key={index} onClick={() => setSelectedCountry(country)}>
                <div className="group flex items-center rounded-md cursor-pointer transition ease-in-out px-8 pb-4 mt-1">
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
