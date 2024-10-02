import BeerCard from "../components/BeerCard";
import { getBeers } from "../lib/api";
import { useEffect, useState } from "react";

const AllBeers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const beers = await getBeers();
      setData(beers);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl p-2">All Beers</h1>
      <div className="flex flex-row items-center justify-center flex-wrap gap-4 mb-2">
        {data.map((beer) => (
          <BeerCard key={beer._id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default AllBeers;
