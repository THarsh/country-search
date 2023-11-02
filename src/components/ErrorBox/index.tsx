import React, { useContext } from "react";
import { CountryContext } from "../../context/countryContext";

function ErrorBox() {
  const { error, setError } = useContext(CountryContext)!;
  return (
    <>
      <div
        className="relative flex items-center p-4 pr-10 text-sm text-gray-800 border border-gray-300 rounded-lg dark:border-gray-600 mt-8"
        role="alert"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Invalid Country Name : {error}</span>
        </div>
        <button
          className="absolute top-0 right-0 bottom-0 pr-4"
          onClick={() => setError(null)}
        >
          <svg
            className="text-slate-800 hover:text-slate-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47.971 47.971"
          >
            <path d="M28.228,23.986l19.186-19.186c1.172-1.171,1.172-3.071,0-4.243c-1.172-1.171-3.072-1.171-4.244,0L23.986,19.742 L4.8,0.557c-1.172-1.171-3.072-1.171-4.244,0c-1.172,1.171-1.172,3.071,0,4.243l19.186,19.186l-19.186,19.186 c-1.172,1.172-1.172,3.072,0,4.244c0.586,0.586,1.354,0.879,2.122,0.879s1.536-0.293,2.122-0.879l19.186-19.186l19.186,19.186 c0.586,0.586,1.354,0.879,2.122,0.879s1.536-0.293,2.122-0.879c1.172-1.172,1.172-3.072,0-4.244L28.228,23.986z" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default ErrorBox;
