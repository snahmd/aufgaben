import Header from "./Header";
import { data } from "../helpers/data";
import Card from "./Card";

const Home = () => {
  console.log(data);
  return (
    <div>
      <Header />
      <div className="flex flex-row gap-16 flex-wrap justify-center items-center">
        {data.map((car) => {
          return (
            <Card
              key={car.id}
              index={car.id}
              carModel={car.carModel}
              carMake={car.CarMake}
              carYear={car.CarYear}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
