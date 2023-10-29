import React, { useCallback, useEffect, useState } from "react";
import Source from "../../api/source";
import SearchBox from "../../components/Search/SearchBox";
import SearchResultList from "../../components/Search/SearchResultList";
import useDebounce from "../../hooks/useDebounce";
import { countryListDetail } from "../../types/mian";
import CountryCard from "../../components/CountryCard";

function Home() {
  return (
    <section className="home-section">
      <div className="bg-gray-100 p-4">
        <div className="container mx-auto h-[800px]">
          <div className="grid">
            <SearchBox />
            <SearchResultList />
            <CountryCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
