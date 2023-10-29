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

  useEffect(() => {
    fireOnBySearch();
  }, [fireOnBySearch, setCountries, setSelectedCountry]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center md:items-stretch"
    >
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full md:w-auto flex-1 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
        placeholder="Search country name..."
      />

      <button
        type="submit"
        className="w-full md:w-auto btn btn-primary px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
