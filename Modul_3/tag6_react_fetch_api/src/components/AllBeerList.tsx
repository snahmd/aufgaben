import { useEffect, useState } from "react";
import AllBeerCard from "./AllBeerCard";
import AllBeerDetail from "./AllBeerDetail";

const AllBeerList = (props) => {
  const [allBeers, setAllBeers] = useState([]);
  const [detailPageId, setDetailPageId] = useState("");

  useEffect(() => {
    window.history.pushState({}, "", "/all-beers");
    console.log("....");
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => {
        console.log("..:");
        console.log(data);
        setAllBeers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  let ahmed = 0;
  for (let i = 0; i < allBeers.length; i++) {
    if (allBeers[i]._id === detailPageId) {
      ahmed = i;
    }
  }

  return (
    <div>
      {detailPageId != "" ? (
        <AllBeerDetail
          beer={allBeers[ahmed]}
          setDetailPageId={setDetailPageId}
        />
      ) : (
        allBeers.map((beer, i) => (
          <AllBeerCard key={i} beer={beer} setDetailPageId={setDetailPageId} />
        ))
      )}
      <div className="bg-yellow-400 p-2">
        <button
          className="bg-white text-slate-700 p-2"
          onClick={() => {
            props.setPage("start-page");
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default AllBeerList;
