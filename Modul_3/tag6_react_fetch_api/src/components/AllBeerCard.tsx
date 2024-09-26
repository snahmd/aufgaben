import { useState } from "react";
import AllBeerDetail from "./AllBeerDetail";

const AllBeerCard = (props) => {
  const [detail, setDetail] = useState(false);
  const handleDetailClick = () => {
    setDetail(true);
    props.setDetailPageId(props.beer._id);
  };
  return (
    <>
      <div className="text-black">
        <div>
          <img src={props.beer.image_url} alt="#" />
          <div>
            <h3>{props.beer.name}</h3>
            <h4>{props.beer.tagline}</h4>
            <h5>Created by: {props.beer.name}</h5>
            <button
              className="detail bg-red-400 p-2"
              onClick={handleDetailClick}
            >
              Detail
            </button>
          </div>
        </div>
        <hr className="bg-red-700 h-1 my-2" />
      </div>
    </>
  );
};

export default AllBeerCard;
