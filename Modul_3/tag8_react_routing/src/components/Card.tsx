import { Link } from "react-router-dom";

const Card = ({
  index,
  carModel,
  carMake,
  carYear,
}: {
  index: number;
  carModel: string;
  carMake: string;
  carYear: string;
}) => {
  return (
    <>
      <div className="flex flex-col items-center border border-white w-64 h64">
        <p>{carMake}</p>
        <Link className="border border-white p-1 my-2" to={`/cards/${index}`}>
          Read More
        </Link>
      </div>
    </>
  );
};

export default Card;
