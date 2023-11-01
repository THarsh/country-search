import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 fixed w-full bottom-0 z-50">
      <div className="w-full mx-auto max-w-screen-xl p-4 text-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a className="hover:underline">Country Finder App</a>. All
          Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
