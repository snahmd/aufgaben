import allBeerImg from "../assets/beer_api_hero_img.avif";
import randomBeerImg from "../assets/random_beer.jpg";

const Startpage = (props) => {
  return (
    <div className="mx-8 my-16 md:mx-32 lg:mx-64 flex flex-col justify-center items-center gap-16">
      <div className="all-beers">
        <div className="card bg-yellow-400">
          <img src={allBeerImg} alt="allBeerImg" />
          <button
            className="text-3xl font-bold p-2"
            onClick={props.handleClick}
          >
            All Beers
          </button>
        </div>
        <p className="text-slate-800 p-2 text-2xl text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo.
          Aspernatur adipisci recusandae harum molestiae.
        </p>
      </div>
      <div className="random-beers">
        <div className="card bg-yellow-400">
          <img src={randomBeerImg} alt="randomBeerImg" />
          <button
            className="text-3xl font-bold p-2"
            onClick={props.handleRandomClick}
          >
            Random Beer
          </button>
        </div>
        <p className="text-slate-800 p-2 text-2xl text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo.
          Aspernatur adipisci recusandae harum molestiae.
        </p>
      </div>
    </div>
  );
};

export default Startpage;
