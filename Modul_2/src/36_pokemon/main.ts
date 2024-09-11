import { IPokemon } from "./contracts/IPokemon";
import { IPokemonResult } from "./contracts/IPokemens";
import { IPokemonType } from "./contracts/IPokemens";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
const TYPE_URL = "https://pokeapi.co/api/v2/type";

const main = document.querySelector("main") as HTMLDivElement;
const form = document.querySelector("form") as HTMLFormElement;
const inputFeld = document.querySelector("input") as HTMLInputElement;
const selectType = document.querySelector("select") as HTMLSelectElement;
const show_pk = document.getElementById("show_pk") as HTMLButtonElement;

const POKEMON_TYPES = [
  { name: "normal", url: "https://pokeapi.co/api/v2/type/1/" },
  { name: "fighting", url: "https://pokeapi.co/api/v2/type/2/" },
  { name: "flying", url: "https://pokeapi.co/api/v2/type/3/" },
  { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
  { name: "ground", url: "https://pokeapi.co/api/v2/type/5/" },
  { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
  { name: "bug", url: "https://pokeapi.co/api/v2/type/7/" },
  { name: "ghost", url: "https://pokeapi.co/api/v2/type/8/" },
  { name: "steel", url: "https://pokeapi.co/api/v2/type/9/" },
  { name: "fire", url: "https://pokeapi.co/api/v2/type/10/" },
  { name: "water", url: "https://pokeapi.co/api/v2/type/11/" },
  { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
  { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
  { name: "psychic", url: "https://pokeapi.co/api/v2/type/14/" },
  { name: "ice", url: "https://pokeapi.co/api/v2/type/15/" },
  { name: "dragon", url: "https://pokeapi.co/api/v2/type/16/" },
  { name: "dark", url: "https://pokeapi.co/api/v2/type/17/" },
  { name: "fairy", url: "https://pokeapi.co/api/v2/type/18/" },
];

show_pk?.addEventListener("click", async () => {
  main.innerHTML = "";
  await showAllPokemon();
});

async function showAllPokemon() {
  try {
    if (main.innerHTML !== "") {
      return;
    }

    const response = await fetch(BASE_URL);
    const data = await response.json();

    const results: IPokemonResult[] = data.results;
    // console.log(results);

    for (const result of results) {
      try {
        const pokemonResponse = await fetch(result.url);
        const pokemon = await pokemonResponse.json();
        console.log(pokemon);
        await showPokemon(pokemon);
      } catch (error) {
        console.error(error);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function showPokemon(pokemon: IPokemon) {
  const div = document.createElement("div") as HTMLDivElement;
  div.classList.add("pokemon-card");

  const name = document.createElement("h3") as HTMLHeadElement;
  name.textContent = pokemon.name;
  div.appendChild(name);
  //!version1
  //   const img = document.createElement("img");
  //   img.src = pokemon.sprites.front_default;
  //   img.alt = pokemon.name;
  //   div.appendChild(img);
  //!version2
  div.appendChild(createElementImg(pokemon.sprites.front_default));
  div.appendChild(createElement("Height: ", pokemon.height.toString()));
  div.appendChild(createElement("Weight: ", pokemon.weight));

  const ul = document.createElement("ul") as HTMLUListElement;
  const abilitiesLabel = document.createElement("h4") as HTMLHeadElement;
  abilitiesLabel.textContent = "Abilities";
  ul.appendChild(abilitiesLabel);
  div.appendChild(ul);

  pokemon.abilities.forEach((element) => {
    const li = document.createElement("li") as HTMLLIElement;
    li.textContent = element.ability.name;
    ul.appendChild(li);
  });

  main.appendChild(div);
}

function createElementImg(value: string): HTMLImageElement {
  const img = document.createElement("img") as HTMLImageElement;
  img.src = value;
  return img;
}

function createElement(
  label: string,
  value: string | number
): HTMLParagraphElement {
  const paragraph = document.createElement("p") as HTMLParagraphElement;
  paragraph.textContent = `${label} ${value}`;
  return paragraph;
}

form?.addEventListener("submit", async (event: Event) => {
  event.preventDefault();
  main.innerHTML = "";
  if (!inputFeld.value) {
    await showAllPokemon();
  } else {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputFeld.value.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("Pokemon not found");
      }
      const pokemon = await response.json();
      console.log(pokemon);
      await showPokemon(pokemon);
    } catch (error) {
      console.error(error);
    }
  }
});

function initializeTypes() {
  POKEMON_TYPES.forEach((type) => {
    const option = document.createElement("option") as HTMLOptionElement;
    option.value = type.name;
    option.textContent = type.name.charAt(0).toUpperCase() + type.name.slice(1);
    selectType.appendChild(option);
  });
}
initializeTypes();

selectType?.addEventListener("change", async (event) => {
  const type = (event.target as HTMLSelectElement).value;
  if (type) {
    await filterPokemonType(type);
  } else {
    await showAllPokemon();
  }
});

async function filterPokemonType(type: string) {
  try {
    const response = await fetch(`${TYPE_URL}/${type}`);
    const data = await response.json();

    main.innerHTML = "";

    const pokemons = data.pokemon.map(
      (pokemon: IPokemonType) => pokemon.pokemon
    );
    for (const result of pokemons) {
      const pokemonResponse = await fetch(result.url);
      const pokemon = await pokemonResponse.json();
      await showPokemon(pokemon);
    }
  } catch (error) {
    console.error(error);
  }
}
