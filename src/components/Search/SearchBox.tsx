import React, { useEffect, useState, useCallback, useContext } from "react";
import useDebounce from "../../hooks/useDebounce";
import Source from "../../api/source";
import { countryListDetail } from "../../types/mian";
import { CountryContext } from "../../context";

function SearchBox() {
  const [searchText, setSearchText] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchText, 500);
  const [listResult, setListResult] = useState<countryListDetail[]>([]);
  const { setCountries, setSelectedCountry } = useContext(CountryContext)!;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Search Query: ");
    // add your search handling logic here
  };

  const fireOnBySearch = useCallback(async () => {
    try {
      if (debouncedSearchValue) {
        let result = await Source.get(`name/${debouncedSearchValue}`);
        if (result?.status === 200) {
          setCountries(result?.data);
        }
      } else {
        setCountries([]);
        setSelectedCountry(null);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
      console.error(error);
      setCountries([]);
    }
  }, [debouncedSearchValue]);

  const searchClear = () => {
    setCountries([]);
    setSelectedCountry(null);
    setSearchText("");
  };

  useEffect(() => {
    fireOnBySearch();
  }, [fireOnBySearch, setCountries, setSelectedCountry]);

  return (
    <form onSubmit={handleSubmit}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search country name..
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=" Search country name.."
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>

        {searchText && (
          <button
            className="absolute top-0 right-0 bottom-0 pr-28"
            onClick={searchClear}
          >
            <svg
              className="text-slate-100 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 47.971 47.971"
            >
              <path d="M28.228,23.986l19.186-19.186c1.172-1.171,1.172-3.071,0-4.243c-1.172-1.171-3.072-1.171-4.244,0L23.986,19.742 L4.8,0.557c-1.172-1.171-3.072-1.171-4.244,0c-1.172,1.171-1.172,3.071,0,4.243l19.186,19.186l-19.186,19.186 c-1.172,1.172-1.172,3.072,0,4.244c0.586,0.586,1.354,0.879,2.122,0.879s1.536-0.293,2.122-0.879l19.186-19.186l19.186,19.186 c0.586,0.586,1.354,0.879,2.122,0.879s1.536-0.293,2.122-0.879c1.172-1.172,1.172-3.072,0-4.244L28.228,23.986z" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
}

export default SearchBox;
