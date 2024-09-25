import { useEffect, useState } from "react";

interface PokemonData {
  name: string;
  url: string;
}

function App() {
  const [pokemon, setPokemon] = useState<PokemonData[]>([]);
  useEffect(() => {
    fetch("https:pokeapi.co/api/v2/pokemon/?limit=50")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPokemon(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(pokemon);
  return (
    <div>
      <h1>Pokemon</h1>
      <ul>
        {pokemon.map((pokemonElements) => (
          <a href={pokemonElements.url}>
            <li key={pokemonElements.name}>{pokemonElements.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default App;
