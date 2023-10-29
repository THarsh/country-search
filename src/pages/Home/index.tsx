import React, { useCallback, useEffect, useState } from "react";
import Source from "../../api/source";
import SearchBox from "../../components/Search/SearchBox";
import SearchResultList from "../../components/Search/SearchResultList";
import useDebounce from "../../hooks/useDebounce";
import { countryListDetail } from "../../types/mian";
import CountryCard from "../../components/CountryCard";

function Home() {
  return (
    <section className="home-section ">
      <div className="bg-gray-100 p-4 flex justify-center h-screen">
        <div className="container mx-auto ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-start-3 col-span-8 pt-10">
              <SearchBox />
              <SearchResultList />
              <CountryCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
