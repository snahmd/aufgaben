import allBeerImg from "../assets/beer_api_hero_img.avif";
import randomBeerImg from "../assets/random_beer.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="mx-8 my-16 md:mx-32 lg:mx-64 flex flex-col justify-center items-center gap-16">
        <div className="all-beers">
          <div className="card bg-yellow-400">
            <img
              className="border border-yellow-400"
              src={allBeerImg}
              alt="allBeerImg"
            />
            <Link to="/beers" className="text-3xl font-bold p-2">
              <h2 className="pl-4">All Beers</h2>
            </Link>
          </div>
          <p className="text-slate-200 p-2 text-2xl text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo.
            Aspernatur adipisci recusandae harum molestiae.
          </p>
        </div>
        <div className="random-beers">
          <div className="card bg-yellow-400">
            <img
              className="border border-yellow-400"
              src={randomBeerImg}
              alt="randomBeerImg"
            />
            <Link to="/random-beer" className="text-3xl font-bold  p-2">
              <h2 className="pl-4">Random Beer</h2>
            </Link>
          </div>
          <p className="text-slate-200 p-2 text-2xl text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo.
            Aspernatur adipisci recusandae harum molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
