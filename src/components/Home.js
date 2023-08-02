import React from "react";

function Home() {
  // update the JSX being returned!
  const name = "Isaias";
  const city = "Calgary";
  return (
  <div id="home">
    <h1 style={{color: 'firebrick'}}>{name} is a Web Developer from {city}</h1>
  </div>
  );
}

export default Home;
