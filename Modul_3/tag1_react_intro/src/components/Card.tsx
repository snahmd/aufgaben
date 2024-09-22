const Card = (props) => {
  return (
    <div className="card bg-[#2a2f4b] shadow-2xl p-4 flex flex-col justify-center items-center gap-2">
      <h4 className="font-semibold text-2xl">{props.title}</h4>
      <p className="text-center text-[#979ed5]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        assumenda.
      </p>
      <h5 className="text-center">JavaScript React Sass</h5>
    </div>
  );
};

export default Card;
