import React from "react";
import SearchBox from "../../components/Search/SearchBox";
import SearchResultList from "../../components/Search/SearchResultList";
import CountryCard from "../../components/CountryCard";
import ContentBox from "../../components/ContentBox";

function Home() {
  return (
    <section className="home-section min-h-full">
      <div className="py-20 px-4 flex justify-center">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-12 md:gap-4 ">
            <div className=" md:col-start-3 col-span-8 pt-10 text-left">
              <ContentBox />
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
