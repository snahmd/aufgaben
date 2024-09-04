import { IPlanets, IResult } from "./contracts/IPlanets";
import "./style.css";

// * BASE_URL

const BASE_URL = "https://swapi.dev/api/";
const PLANETS_URL = `${BASE_URL}/planets`;

// * HTML ELEMENTE SELEKTIEREN

const planetOutput = document.getElementById("planet-output") as HTMLDivElement;
const loadingIndicator = document.querySelector(".loader") as HTMLSpanElement;

loadingIndicator.style.color = "none";

if (planetOutput) {
  loadingIndicator.style.display = "block";
  fetch(PLANETS_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((planets: IPlanets) => {
      console.log(planets.results);
      return planets.results;
    })
    .then((result: IResult[]) => {
      console.log(result);
      displayPlanets(result);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    })
    .finally(() => {
      loadingIndicator.style.display = "none";
    });
}

function displayPlanets(results: IResult[]) {
  if (planetOutput) {
    planetOutput.innerHTML = "";
    results.forEach((result: IResult) => {
      const headline = document.createElement("h2") as HTMLHeadingElement;
      headline.textContent = result.name;
      planetOutput.appendChild(headline);

      planetOutput.appendChild(
        createParagraph("Rotation Period", result.rotation_period)
      );
      planetOutput.appendChild(
        createParagraph("Orbital Period", result.orbital_period)
      );
      planetOutput.appendChild(createParagraph("Diameter", result.diameter));
      planetOutput.appendChild(createParagraph("Climate", result.climate));
      planetOutput.appendChild(createParagraph("Gravity", result.gravity));
      planetOutput.appendChild(createParagraph("Terrain", result.terrain));
      planetOutput.appendChild(
        createParagraph("Surface Water", result.surface_water)
      );
    });
  }
}

function createParagraph(text: string, value: string): HTMLParagraphElement {
  const paragraph = document.createElement("p") as HTMLParagraphElement;
  paragraph.textContent = `${text}: ${value}`;
  return paragraph;
}
