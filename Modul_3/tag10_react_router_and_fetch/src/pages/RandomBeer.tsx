import { useEffect, useState } from "react";
import BeerDetail from "./BeerDetail";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RandomBeer = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((result) => {
        navigate(`/beers/${result._id}`, { state: { ...result } });
      })
      .catch((error) => console.log(error));
  }, []);

  return <h1>Loading...</h1>;
};

export default RandomBeer;
