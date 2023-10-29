import React from "react";

function CountryCard({ country }: any) {
  return (
    <div className="block max-w-sm p-6 mt-5 bg-white border border-gray-200 rounded-lg shadow text-left">
      <img
        className="w-28 h-20 object-cover border-2  rounded border-slate-400 mb-3"
        src="https://flagcdn.com/tt.svg"
        alt=""
      />
      <h5 className="mb-2 text-2xl font-bold tracking-tight">Sri Lanka</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 mb-2">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <ul className="list-outside">
        <li>
          <strong>Currency Name</strong>
        </li>
        <li>What side of the road they drive on</li>
        <li>Flag & coat of arms</li>
      </ul>
    </div>
  );
}

export default CountryCard;
