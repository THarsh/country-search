import React, { useCallback, useEffect, useState } from "react";
import Source from "../../api/source";
import Search from "../../components/Search";

function Home() {
  return (
    <section className="home-section">
      <Search />
    </section>
  );
}

export default Home;
