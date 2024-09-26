import { useState, useEffect } from "react";
import AllBeerDetail from "./AllBeerDetail";

const RandomBeer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="text-black">
      {data !== null ? <AllBeerDetail beer={data} /> : <h1>Loading...</h1>}
    </div>
  );
};

export default RandomBeer;
