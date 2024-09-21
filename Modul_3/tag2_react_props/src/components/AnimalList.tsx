import animals from "./data";

const AnimalList = () => {
  return (
    <div>
      <div className="animal-list grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid-rows-3 row-end-auto mx-8 ">
        {animals.map((animal, index) => (
          <div
            className="animal-item border border-white h-[700px] md:h-[650px] lg:h-[600px] flex flex-col justify-center items-center text-3xl font-bold"
            key={index}
          >
            <p className="text-[100px] pb-12 mt-16">{animal.emoji}</p>
            <h3 className="text-4xl">{animal.name}</h3>
            <h3 className="text-3xl">{animal.species}</h3>
            <h3 className="text-2xl">{animal.habitat}</h3>
            <h3 className="text-xl">{animal.diet}</h3>
            <h3 className="text-lg font-normal pb-8">
              {animal.lifespan} years
            </h3>
            <div className="bg-[#2b2b38] w-full h-full flex items-center">
              <ul>
                {animal.funFacts.map((fact) => (
                  <li className="text-lg list-disc list-inside p-2" key={fact}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
