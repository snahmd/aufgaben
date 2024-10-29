import "./App.css";
import { useState, useEffect } from "react";

type Starship = {
  id: number;
  name: string;
};

function App() {
  const [starshipdata, setStarshipdata] = useState<Starship[]>([]);
  useEffect(() => {
    fetch("http://localhost:3000/starships/")
      .then((response) => response.json())
      .then((data) => setStarshipdata(data));
  }, []);
  return (
    <div>
      <h1>
        {starshipdata.map((starship) => (
          <h3 key={starship.id}>{starship.name}</h3>
        ))}
      </h1>
    </div>
  );
}

export default App;
