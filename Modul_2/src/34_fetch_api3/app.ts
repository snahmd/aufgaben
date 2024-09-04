import { ICharacterResponse, ICharacter } from "./contracts/ICharacter";

fetch("https://rickandmortyapi.com/api/character?page=1")
  .then((response) => response.json())
  .then((data: ICharacterResponse) => {
    displayCharacters(data.results);
  })
  .catch((error) => {
    console.error("Fehler beim Abrufen der Daten:", error);
  });

function displayCharacters(characters: ICharacter[]) {
  const characterList = document.getElementById(
    "character-list"
  ) as HTMLUListElement;
  characterList.innerHTML = "";

  characters.forEach((character) => {
    const listItem = document.createElement("li");
    listItem.textContent = character.name;
    characterList.appendChild(listItem);
  });
}
