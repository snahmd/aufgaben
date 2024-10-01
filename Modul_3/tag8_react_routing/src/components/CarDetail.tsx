import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../helpers/data";
import Header from "./Header";

const CarDetail = () => {
  const id = useParams<{ id: string }>().id;

  let index = undefined;

  for (let i = 0; i < data.length; i++) {
    if (data[i].id.toString() === id) {
      index = data[i];
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-96">
      <Header />
      <h1>{index?.CarMake}</h1>
      <h2>{index?.carModel}</h2>
      <h3>{index?.CarYear}</h3>
    </div>
  );
};

export default CarDetail;
