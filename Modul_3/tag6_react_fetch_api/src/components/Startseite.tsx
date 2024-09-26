import Startpage from "./Startpage";
import AllBeerList from "./AllBeerList";
import RandomBeer from "./RandomBeer";
import { useState } from "react";

function Startseite() {
  const [page, setPage] = useState("start-page");
  const handleClick = () => {
    setPage("all-beers");
  };
  const handleRandomClick = () => {
    setPage("random-beer");
  };

  return (
    <div>
      {page === "all-beers" && <AllBeerList setPage={setPage} />}
      {page === "random-beer" && <RandomBeer />}
      {page === "start-page" && (
        <Startpage
          handleClick={handleClick}
          handleRandomClick={handleRandomClick}
        />
      )}
    </div>
  );
}

export default Startseite;
