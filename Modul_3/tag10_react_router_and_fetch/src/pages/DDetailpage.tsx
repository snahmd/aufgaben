import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface PokemonData {
  name: string;
}

const Detailpage = () => {
  //   const [id, setId] = useState("5");
  const [data, setData] = useState<PokemonData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((e) => {
        setError(e);
      });
  }, [id]);
  if (error) {
    return "Error, try again";
  }
  if (!data) {
    return "Loading...";
  }
  return (
    <div>
      {/* <input type="text" value={id} onChange={(e) => setId(e.target.value)} /> */}
      <h2>Details {id}</h2>
      {/* // <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <h1>{data.name}</h1>
    </div>
  );
};

export default Detailpage;
