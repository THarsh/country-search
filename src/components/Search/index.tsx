import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Search Query: ", query);
    // add your search handling logic here
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <div className="grid">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center md:items-stretch"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-auto flex-1 p-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
              placeholder="Search..."
            />

            <button
              type="submit"
              className="w-full md:w-auto btn btn-primary px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Search
            </button>
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
            <div className="flex items-center p-4 border-2 border-gray-300 rounded-md">
              <img
                src="https://flagcdn.com/w320/lk.png"
                alt=""
                className="w-16 h-10 mr-4 rounded"
              />
              <p className="text-lg font-semibold">Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
