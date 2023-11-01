import React, { useContext } from "react";
import { CountryContext } from "../../context";

function CountryCard() {
  const { selectedCountry } = useContext(CountryContext)!;
  const { setCountries, setSelectedCountry } = useContext(CountryContext)!;

  const closeBtn = () => {
    setCountries([]);
    setSelectedCountry(null);
  };

  return (
    <>
      {selectedCountry && (
        <div className="block relative max-w p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow text-left">
          <button
            className="absolute top-0 right-0  pr-4 pt-4"
            onClick={closeBtn}
          >
            <svg
              className="text-slate-400 hover:text-slate-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.971 47.971"
            >
              <path d="M28.228,23.986l19.186-19.186c1.172-1.171,1.172-3.071,0-4.243c-1.172-1.171-3.072-1.171-4.244,0L23.986,19.742 L4.8,0.557c-1.172-1.171-3.072-1.171-4.244,0c-1.172,1.171-1.172,3.071,0,4.243l19.186,19.186l-19.186,19.186 c-1.172,1.172-1.172,3.072,0,4.244c0.586,0.586,1.354,0.879,2.122,0.879s1.536-0.293,2.122-0.879l19.186-19.186l19.186,19.186 c0.586,0.586,1.354,0.879,2.122,0.879s1.536-0.293,2.122-0.879c1.172-1.172,1.172-3.072,0-4.244L28.228,23.986z" />
            </svg>
          </button>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1">
              <h5 className="mb-1 text-2xl font-semibold tracking-tight">
                {selectedCountry.name.common}
              </h5>
              <h6 className="font-normal text-gray-700 mb-2">
                {selectedCountry.name.official}
              </h6>
              {Object.values(selectedCountry.currencies).map(
                (currency, index) => (
                  <p className="mb-2" key={index}>
                    <strong>Currency : </strong>
                    {currency.name} - ({currency.symbol})
                  </p>
                )
              )}
              <p className="mb-2">
                <strong>Drive side on road</strong> : {selectedCountry.car.side}
              </p>
              <p className="mb-2">
                <strong>Continents</strong> : {selectedCountry.continents}
              </p>
              <p className="mb-2 break-all">
                <strong>Time Zone</strong> : {selectedCountry.timezones}
              </p>
            </div>
            <div className="flex-1 ">
              <div className="flex gap-8">
                <div>
                  <h5 className="mb-2 font-medium">Country Flag</h5>
                  <img
                    className="w-28 h-20 object-cover border-2  rounded border-slate-400 mb-3"
                    src={selectedCountry.flags.svg}
                    alt={selectedCountry.name.common}
                  />
                </div>
                <div>
                  <h5 className="mb-2 font-medium">Coat of Arms</h5>
                  <img
                    className="w-28 h-20 p-2 object-contain border-2  rounded border-slate-400 mb-3"
                    src={selectedCountry.coatOfArms.svg}
                    alt={selectedCountry.name.common}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CountryCard;
