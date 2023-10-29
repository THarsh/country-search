import React, { useCallback, useEffect, useState } from "react";
import Source from "../../api/source";
import SearchBox from "../../components/Search/SearchBox";
import SearchResultList from "../../components/Search/SearchResultList";
import useDebounce from "../../hooks/useDebounce";
import { countryListDetail } from "../../types/mian";
import CountryCard from "../../components/CountryCard";

function Home() {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchValue = useDebounce(searchText, 500);
  const [listResult, setListResult] = useState<countryListDetail[]>([]);

  const searchTerm = (e: any) => {
    let onChangeValue = e.target.value;
    setSearchText(onChangeValue);
  };

  const fireOnBySearch = useCallback(async () => {
    try {
      if (debouncedSearchValue) {
        let result = await Source.get(`name/${debouncedSearchValue}`);
        if (result?.status === 200) {
          setListResult(result?.data);
        }
      } else {
        setListResult([]);
      }
    } catch (error) {
      console.error(error);
    }
  }, [debouncedSearchValue]);

  useEffect(() => {
    fireOnBySearch();
  }, [fireOnBySearch]);

  return (
    <section className="home-section">
      <div className="bg-gray-100 p-4">
        <div className="container mx-auto h-[800px]">
          <div className="grid">
            <SearchBox onChange={searchTerm} value={debouncedSearchValue} />
            {listResult.length > 0 ? (
              <div className="overflow-y-auto h-[200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 bg-slate-50 mt-5">
                {listResult.map((country, index) => (
                  <SearchResultList
                    key={index}
                    name={country.name.common}
                    src={country.flags.svg}
                  />
                ))}
              </div>
            ) : null}

            <CountryCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
