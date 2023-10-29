import React, { useContext } from "react";
import { CountryContext } from "../../context";

function CountryCard() {
  const { selectedCountry } = useContext(CountryContext)!;
  return (
    <div>
      {selectedCountry && (
        <div className="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow text-left">
          <img
            className="w-28 h-20 object-cover border-2  rounded border-slate-400 mb-3"
            src={selectedCountry.flags.svg}
            alt=""
          />
          <img
            className="w-28 h-20 object-contain    mb-3"
            src={selectedCountry.coatOfArms.svg}
            alt=""
          />
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {selectedCountry.name.common}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
            {selectedCountry.name.official}
          </p>
          {Object.values(selectedCountry.currencies).map((currency, index) => (
            <p key={index}>
              <strong>Currency : </strong>
              {currency.name} - ({currency.symbol})
            </p>
          ))}
          <p>
            <strong>Drive side on road</strong> : {selectedCountry.car.side}
          </p>
        </div>
      )}
    </div>
  );
}

export default CountryCard;
