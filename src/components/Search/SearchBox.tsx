import React, { useState } from "react";

function SearchBox({ searchValue, onChange }: any) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Search Query: ");
    // add your search handling logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center md:items-stretch"
    >
      <input
        type="text"
        value={searchValue}
        onChange={onChange}
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
  );
}

export default SearchBox;
