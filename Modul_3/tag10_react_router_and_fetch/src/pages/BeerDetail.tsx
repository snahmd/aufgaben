import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBeers } from "../lib/api";
import { Link } from "react-router-dom";
const BeerDetail = () => {
  const params = useParams();
  const location = useLocation();
  const data = location.state;
  const [detail, setDetail] = useState([]);
  const [pageFound, setPageFound] = useState(true);

  useEffect(() => {
    console.log("kdjaskladsklkldakls");
    if (!data) {
      const fetchData = async () => {
        const beers = await getBeers();
        let flag = false;
        for (let i = 0; i < beers.length; i++) {
          if (beers[i]._id === params._id) {
            flag = true;
          }
        }
        if (flag) {
          setPageFound(true);
        } else {
          setPageFound(false);
        }

        setDetail(beers);
      };
      fetchData();
    }
  }, []);

  if (data) {
    return (
      <div>
        <div>
          <div className="text-slate-800 p-2 text-2xl text-wrap">
            <img src={data.image_url} alt="#" />
            <p>{data.name}</p>
            <p>{data.tagline}</p>
            <p>{data.first_brewed}</p>
            <p>{data.attenuation_level}</p>
            <p>{data.description}</p>
            <p>{data.contributed_by}</p>
          </div>
          <Link to="/beers" className="p-2 m-2">
            <h4 className="text-4xl bg-white text-yellow-400 w-40 border border-yellow-400 p-2 ml-2 mb-2">
              All Beers
            </h4>
          </Link>
        </div>
      </div>
    );
  } else {
    if (pageFound) {
      //   let beer = undefined;
      //   for (let i = 0; i < detail.length; i++) {
      //     if (detail[i]._id.toString() === params._id) {
      //       beer = detail[i];
      //     }
      //   }
      let beer = detail.find((beer) => beer?._id === params._id);

      return (
        <div>
          <div>
            <p className="text-slate-800 p-2 text-2xl text-wrap">
              {beer?.tagline}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <h1 className="text-4xl text-slate-800 text-center m-8 h-[75vh]">
          Page not found
        </h1>
      );
    }
  }
};

export default BeerDetail;
