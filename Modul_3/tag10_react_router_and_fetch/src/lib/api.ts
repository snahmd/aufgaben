export const getBeers = async () => {
  const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers`);
  const json = response.json();
  return json;
};

export const getRandomBeer = async () => {
  const response = await fetch(
    `https://ih-beers-api2.herokuapp.com/beers/random`
  );
  const json = response.json();
  return json;
};
