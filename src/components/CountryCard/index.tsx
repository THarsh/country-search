import React from "react";

function CountryCard({ country }: any) {
  if (!country) return null;

  return (
    <div>
      <h1>AAA{country.name.official}</h1>
      <p></p>
      <img src={country.flags[0]} alt="Country flag" />
      <p>Drives on the: {country.drivesOn}</p>
    </div>
  );
}

export default CountryCard;
