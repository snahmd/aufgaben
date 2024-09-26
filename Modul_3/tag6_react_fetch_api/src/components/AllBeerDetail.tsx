import React, { useEffect } from "react";

const AllBeerDetail = (props) => {
  useEffect(() => {
    window.history.pushState({}, "", "/beer-detail");
  }, []);
  return (
    <div>
      <div>
        <p className="text-slate-800 p-2 text-2xl text-wrap">
          <img src={props.beer.image_url} alt="#" />
          {props.beer.name}
          {props.beer.tagline}
          {props.beer.first_brewed}
          {props.beer.attenuation_level}
          {props.beer.description}
          {props.beer.contributed_by}
        </p>
        <button
          className="p-2 bg-yellow-400"
          onClick={() => {
            props.setDetailPageId("");
          }}
        >
          Geri
        </button>
      </div>
    </div>
  );
};

export default AllBeerDetail;
