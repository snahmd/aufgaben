import { Link } from "react-router-dom";
const BeerCard = (props: any) => {
  const { beer } = props;
  return (
    <div className="card bg-yellow-400 w-96 h-[620px] flex flex-col ">
      <img
        className="border border-yellow-400"
        src={beer.image_url}
        alt={beer.name}
      />
      <h2 className="text-3xl font-bold p-2">{beer.name}</h2>
      <p className="text-slate-200 p-2 text-2xl text-wrap">{beer.tagline}</p>
      {/* link with params */}
      <Link
        to={`/beers/${beer._id}`}
        state={beer}
        className="text-3xl font-bold p-2 border  border-white w-2/5 m-2"
      >
        <h2 className="pl-4">Details</h2>
      </Link>
    </div>
  );
};

export default BeerCard;
